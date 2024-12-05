const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // Backend will run on localhost:3000
const CSV_FILE = path.join(__dirname, 'roles.csv');

app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

function parseCSV(data) {
    const [headers, ...rows] = data.split('\n').map(row => row.split(','));
    return rows.map(row => {
        const role = {};
        headers.forEach((header, i) => {
            role[header.trim()] = row[i]?.trim() || '';  // Ensure no empty strings
        });
        return role;
    }).filter(role => role.id);  // Filter any empty rows
}


// Helper: Convert roles array back to CSV format
function toCSV(roles) {
    const headers = Object.keys(roles[0] || {}); // Use the first role as the header
    const rows = roles.map(role => headers.map(header => role[header]).join(','));
    return [headers.join(','), ...rows].join('\n');
}

// Endpoint: Fetch all roles
app.get('/roles', (req, res) => {
    fs.readFile(CSV_FILE, 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading CSV file');
        const roles = parseCSV(data);
        res.json(roles);
    });
});

// Auto-generate unique ID for new roles
app.post('/roles', (req, res) => {
    console.log('Request body:', req.body);
    const newRole = req.body;

    if (!newRole.Role) {
        return res.status(400).send('Role name is required');
    }

    fs.readFile(CSV_FILE, 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading CSV file');
        
        const roles = parseCSV(data); // Parse the CSV into JSON
        const newId = roles.length ? Math.max(...roles.map(role => parseInt(role.id, 10))) + 1 : 1;
        const roleWithId = { id: newId.toString(), Role: newRole.Role };

        roles.push(roleWithId); // Add the new role

        fs.writeFile(CSV_FILE, toCSV(roles), err => { // Convert the roles back to CSV format and save
            if (err) return res.status(500).send('Error writing to CSV file');
            res.send({ message: 'Role added successfully', role: roleWithId });
        });
    });
});

// Endpoint: Delete a role by ID
app.delete('/roles/:id', (req, res) => {
    const roleId = req.params.id; // Extract role ID from the request
    console.log(`Received DELETE request for role ID: ${roleId}`); // Debugging

    fs.readFile(CSV_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading CSV file:', err);
            return res.status(500).send('Error reading CSV file');
        }

        const roles = parseCSV(data); // Parse roles from CSV
        console.log('Parsed roles from CSV:', roles); // Log parsed roles for debugging

        const roleIndex = roles.findIndex(role => String(role.id).trim() === String(roleId).trim());
        console.log(`Found role index for ID ${roleId}:`, roleIndex); // Log index found

        if (roleIndex === -1) {
            console.error(`Role with ID ${roleId} not found.`);
            return res.status(404).send('Role not found');
        }

        roles.splice(roleIndex, 1); // Remove the role

        fs.writeFile(CSV_FILE, toCSV(roles), (err) => {
            if (err) {
                console.error('Error writing to CSV file:', err);
                return res.status(500).send('Error writing to CSV file');
            }

            console.log(`Role with ID ${roleId} successfully deleted.`);
            res.send({ message: 'Role successfully deleted' });
        });
    });
});



// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
