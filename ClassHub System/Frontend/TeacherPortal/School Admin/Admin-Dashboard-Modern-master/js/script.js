function animateCount(target) {
    const countElement = document.getElementById("teacher-count");
    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed
    const interval = setInterval(() => {
        current += increment;
        if (current > target) {
            current = target;
            clearInterval(interval);
        }
        countElement.textContent = current.toLocaleString();
    }, 20); // Speed of count animation
}
function animateCount(target) {
    const countElement = document.getElementById("student-count");
    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed
    const interval = setInterval(() => {
        current += increment;
        if (current > target) {
            current = target;
            clearInterval(interval);
        }
        countElement.textContent = current.toLocaleString();
    }, 20); // Speed of count animation
}
                     
// Add event listener to trigger animation on hover
document.querySelector('.card').addEventListener('mouseenter', () => animateCount(107200));

//MOdal// Open Modal
function openAddSchoolModal() {
    document.getElementById("addSchoolModal").style.display = "block";
}

// Close Modal
function closeAddSchoolModal() {
    document.getElementById("addSchoolModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    // Open the modal to add school
    const openAddSchoolModal = () => {
        document.getElementById("addSchoolModal").style.display = "block";
    };

    // Close the modal
    const closeAddSchoolModal = () => {
        document.getElementById("addSchoolModal").style.display = "none";
    };

    // Handle form submission to add school
    document.getElementById("addSchoolForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const schoolId = document.getElementById("schoolId").value;
        const schoolName = document.getElementById("schoolName").value;
        const schoolAddress = document.getElementById("schoolAddress").value;

        // Create a new school row
        const schoolRow = document.createElement("tr");
        schoolRow.id = `school-${schoolId}`;

        schoolRow.innerHTML = `
            <td>${schoolId}</td>
            <td>
                <div class="client">
                    <div class="client-img bg-img" style="background-image: url(./img/logo/1.png)"></div>
                    <div class="client-info">
                        <h4>${schoolName}</h4>
                    </div>
                </div>
            </td>
            <td>${schoolAddress}</td>
            <td>
                <div class="actions">
                    <span class="las la-eye" title="View" onclick="viewSchool(${schoolId})"></span>
                    <span class="las la-edit" title="Edit" onclick="editSchool(${schoolId})"></span>
                    <span class="las la-trash" title="Delete" onclick="deleteSchool(${schoolId})"></span>
                </div>
            </td>
        `;

        // Append the new row to the table
        document.getElementById("schoolList").appendChild(schoolRow);

        // Clear the form fields
        document.getElementById("addSchoolForm").reset();

        // Close the modal
        closeAddSchoolModal();
    });
});

// Function to handle school viewing
function viewSchool(schoolId) {
    alert(`Viewing details for school ID: ${schoolId}`);
}

// Function to handle school editing
function editSchool(schoolId) {
    alert(`Editing details for school ID: ${schoolId}`);
}

// Function to handle school deletion
function deleteSchool(schoolId) {
    const schoolRow = document.getElementById(`school-${schoolId}`);
    schoolRow.remove();
    alert(`Deleted school ID: ${schoolId}`);
}

// Function to open the View School Modal with details
function viewSchool(schoolId) {
    // Find the school row using the schoolId
    const schoolRow = document.getElementById(`school-${schoolId}`);
    if (!schoolRow) {
        alert("School not found!");
        return;
    }

    // Extract data from the table row
    const schoolIdText = schoolRow.children[0].innerText;
    const schoolName = schoolRow.querySelector('.client-info h4').innerText;
    const schoolAddress = schoolRow.children[2].innerText;

    // Populate the modal fields
    document.getElementById('viewSchoolId').value = schoolIdText;
    document.getElementById('viewSchoolName').value = schoolName;
    document.getElementById('viewSchoolAddress').value = schoolAddress;

    // Display the modal
    document.getElementById('viewSchoolModal').style.display = 'flex';
}

// Function to close the View School Modal
function closeViewSchoolModal() {
    document.getElementById('viewSchoolModal').style.display = 'none';
}


// Function to open the Edit School Modal with current details
function editSchool(schoolId) {
    // Find the school row using the schoolId
    const schoolRow = document.getElementById(`school-${schoolId}`);
    if (!schoolRow) {
        alert("School not found!");
        return;
    }

    // Extract data from the table row
    const schoolIdText = schoolRow.children[0].innerText; // School ID
    const schoolName = schoolRow.querySelector('.client-info h4').innerText; // School Name
    const schoolAddress = schoolRow.children[2].innerText; // Address

    // Populate the modal fields
    document.getElementById('editSchoolId').value = schoolIdText;
    document.getElementById('editSchoolName').value = schoolName;
    document.getElementById('editSchoolAddress').value = schoolAddress;

    // Display the modal
    document.getElementById('editSchoolModal').style.display = 'flex';
}

// Function to save updated school details
function saveSchoolDetails() {
    // Get the values from the form
    const schoolId = document.getElementById('editSchoolId').value;
    const updatedName = document.getElementById('editSchoolName').value;
    const updatedAddress = document.getElementById('editSchoolAddress').value;

    // Validate inputs
    if (!updatedName || !updatedAddress) {
        alert("Please fill out all fields.");
        return;
    }

    // Find the school row in the table
    const schoolRow = document.getElementById(`school-${schoolId}`);
    if (schoolRow) {
        // Update the table row with the new details
        schoolRow.querySelector('.client-info h4').innerText = updatedName;
        schoolRow.children[2].innerText = updatedAddress;

        // Show a success message
        alert("School details updated successfully!");
    } else {
        alert("Error: Unable to find the school row.");
    }

    // Close the modal
    closeEditSchoolModal();
}

// Function to close the Edit School Modal
function closeEditSchoolModal() {
    document.getElementById('editSchoolModal').style.display = 'none';
}


// Function to delete a school
function deleteSchool(schoolId) {
    const row = document.getElementById(`school-${schoolId}`);
    row.parentNode.removeChild(row);
    alert(`School ID: ${schoolId} deleted`);


    
}
//sideheader
     /* Your custom styles */
      // Retrieve the logo and school name from localStorage
      document.addEventListener("DOMContentLoaded", function() {
        // Retrieve the logo and school name from localStorage
        const logo = localStorage.getItem('schoolLogo');
        const schoolName = localStorage.getItem('schoolName');
      
        // Display the logo if available
        const profileLogo = document.getElementById('profileLogo');
        if (logo) {
          // Set the background image of the profileLogo div to the saved logo (base64 encoded image)
          profileLogo.style.backgroundImage = `url(${logo})`;
        }
      
        // Display the school name if available
        const schoolNameElement = document.getElementById('schoolNameDisplay');
        if (schoolName) {
          schoolNameElement.textContent = schoolName; // Set the text content to the saved school name
        }
      });
//barchart
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('attendanceChart').getContext('2d');

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Monthly Attendance (%)',
            data: [95, 88, 92, 85, 90, 93, 97, 89, 91, 94, 87, 96],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderWidth: 2,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Months',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Attendance (%)',
                    },
                    min: 80,
                    max: 100,
                },
            }
        }
    };

    new Chart(ctx, config);
});

//Forgot password
// Function to open Forgot Password Modal
function openForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

// Function to close Forgot Password Modal
function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

// Handle Forgot Password Form Submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('forgotPasswordEmail').value.toLowerCase(); // Normalize email
    const messageDiv = document.getElementById('forgotPasswordMessage');

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem(email));

    if (userData) {
        // Simulate sending a reset link (Replace with actual email service)
        setTimeout(() => {
            messageDiv.innerHTML = `<div class='alert alert-success'>A password reset link has been sent to <strong>${email}</strong>. Please check your inbox.</div>`;
        }, 1000);
    } else {
        messageDiv.innerHTML = `<div class='alert alert-danger'>Email address <strong>${email}</strong> is not registered.</div>`;
    }

    // Optionally, reset the form
    document.getElementById('forgotPasswordForm').reset();
});

//Profile
document.addEventListener("DOMContentLoaded", () => {
    // Check if user is logged in (email exists in localStorage)
    const email = localStorage.getItem("currentUserEmail");
    if (email) {
        const userData = JSON.parse(localStorage.getItem(email));
        if (userData && userData.username) {
            // Display the username in the designated span
            document.getElementById("usernameDisplay").textContent = `Welcome, ${userData.username}!`;
        }
    } else {
        // Redirect to login page if no email is stored (user not logged in)
        window.location.href = "login.html";
    }
});

// Logout function
function logout() {
    // Remove the user data from localStorage (clearing session)
    localStorage.removeItem("currentUserEmail");

    // Redirect the user to the login page after logout
    window.location.href = "http://127.0.0.1:5500/Frontend/index.html";
 
}




//Attendance
// Function to filter attendance based on selected values
function searchAttendance() {
    // Get selected values from the dropdowns and date input
    const subject = document.getElementById('subject').value;
    const section = document.getElementById('section').value;
    const date = document.getElementById('date').value;

    // Create a mapping of subjects and sections to their corresponding data (as an example)
    const attendanceData = {
        "math": {
            "grade-5": [
                {id: "12345", name: "John Doe", attendance: "present"},
                {id: "12346", name: "Jane Smith", attendance: "absent"},
            ],
            "grade-6": [
                {id: "12347", name: "Alex Smith", attendance: "present"},
                {id: "12348", name: "Jonathan", attendance: "leave"},
            ]
        },
        "english": {
            "grade-5": [
                {id: "12349", name: "John Dew", attendance: "present"},
                {id: "12350", name: "Jonathan", attendance: "absent"},
            ],
            "grade-6": [
                {id: "12351", name: "Lara Croft", attendance: "present"},
                {id: "12352", name: "Marty McFly", attendance: "leave"},
            ]
        }
    };
    

    // Get the table body element to display filtered results
    const tableBody = document.querySelector("table tbody");

    // Clear any previous results
    tableBody.innerHTML = '';

    // Filter the data based on the selected subject and section
    if (attendanceData[subject] && attendanceData[subject][section]) {
        const filteredRecords = attendanceData[subject][section];

        // Loop through the filtered records and add them to the table
        filteredRecords.forEach(record => {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = record.id;
            row.appendChild(idCell);

            const nameCell = document.createElement("td");
            nameCell.textContent = record.name;
            row.appendChild(nameCell);

            const attendanceCell = document.createElement("td");
            attendanceCell.innerHTML = `
                <span class="attendance-circle ${getAttendanceClass(record.attendance)}" 
                      title="${record.attendance}" onclick="markAttendance(${record.id}, '${record.attendance}')"></span>
            `;
            row.appendChild(attendanceCell);

            tableBody.appendChild(row);
        });
    }
}

// Function to get the class based on the attendance status
function getAttendanceClass(status) {
    switch (status) {
        case "present":
            return "green";
        case "absent":
            return "red";
        case "leave":
            return "orange";
        default:
            return "";
    }
}

// Function to handle attendance mark update (can be expanded)
function markAttendance(studentId, status) {
    console.log(`Marking student ${studentId} as ${status}`);
    // Here you would update the status in your backend or local storage
}

// Placeholder function to mark attendance
function markAttendance(studentId, status) {
    console.log(`Attendance for student ${studentId} marked as ${status}`);
}

// Initial call to display data based on default subject selection
document.addEventListener("DOMContentLoaded", function() {
    searchAttendance();
});
// Function to mark attendance for a specific student
function markAttendance(studentId, attendanceId, status) {
    // Get the attendance cell by its ID (attendance-{attendanceId})
    const attendanceCell = document.getElementById('attendance-' + attendanceId);

    // Get all the attendance circles inside this cell
    const attendanceCircles = attendanceCell.getElementsByClassName('attendance-circle');

    // Reset all circles to their default state (remove any active filled color)
    for (let circle of attendanceCircles) {
        circle.style.backgroundColor = '';  // Remove any filled color
        circle.style.opacity = '0.5';       // Reset opacity to dim
    }

    // Now mark the selected circle with a filled color based on the status
    let selectedCircle;
    switch(status) {
        case 'present':
            selectedCircle = attendanceCell.querySelector('.green');
            selectedCircle.style.opacity = '1';  // Full opacity for 'present'
            selectedCircle.style.backgroundColor = 'green'; // Green fill color
            break;
        case 'absent':
            selectedCircle = attendanceCell.querySelector('.red');
            selectedCircle.style.opacity = '1';  // Full opacity for 'absent'
            selectedCircle.style.backgroundColor = 'red'; // Red fill color
            break;
        case 'leave':
            selectedCircle = attendanceCell.querySelector('.orange');
            selectedCircle.style.opacity = '1';  // Full opacity for 'leave'
            selectedCircle.style.backgroundColor = 'orange'; // Orange fill color
            break;
        default:
            return; // If no valid status is passed, exit
    }

    // Optionally, update the title for the selected status
    selectedCircle.setAttribute('title', status.charAt(0).toUpperCase() + status.slice(1)); // Capitalize the first letter
}




//Teachers
 function animateCount(target) {
    const countElement = document.getElementById("teacher-count");
    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed
    const interval = setInterval(() => {
        current += increment;
        if (current > target) {
            current = target;
            clearInterval(interval);
        }
        countElement.textContent = current.toLocaleString();
    }, 20); // Speed of count animation
}
function animateCount(target) {
    const countElement = document.getElementById("student-count");
    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed
    const interval = setInterval(() => {
        current += increment;
        if (current > target) {
            current = target;
            clearInterval(interval);
        }
        countElement.textContent = current.toLocaleString();
    }, 20); // Speed of count animation
}

// Add event listener to trigger animation on hover
document.querySelector('.card').addEventListener('mouseenter', () => animateCount(107200));


         // Save attendance data to localStorage
         function saveAttendance() {
            const date = document.getElementById("attendance-date").value;
            const attendanceRecords = document.querySelectorAll(".attendance-row");
            const attendanceData = [];

            attendanceRecords.forEach(row => {
                const studentId = row.querySelector(".student-id").textContent;
                const studentName = row.querySelector(".student-name").textContent;
                const status = row.querySelector(".attendance-status").value;
                attendanceData.push({ studentId,studentName, status });
            });

            if (!date) {
                alert("Please select a date before saving.");
                return;
            }

            const allAttendance = JSON.parse(localStorage.getItem("attendanceData")) || {};
            allAttendance[date] = attendanceData;
            localStorage.setItem("attendanceData", JSON.stringify(allAttendance));
            alert("Attendance saved successfully!");
        }
    


//Edit Records
 // Load attendance data for the selected date
 function loadAttendance() {
    const date = document.getElementById("edit-date").value;
    const allAttendance = JSON.parse(localStorage.getItem("attendanceData")) || {};

    if (!date || !allAttendance[date]) {
        alert("No attendance data found for the selected date.");
        document.getElementById("attendance-records").innerHTML = "";
        return;
    }

    const attendanceData = allAttendance[date];
    const recordsTable = document.getElementById("attendance-records");
    recordsTable.innerHTML = "";

    attendanceData.forEach((record, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.studentId}</td>
            <td>${record.studentName}</td>
            <td>
                <select class="attendance-status" data-index="${index}">
                    <option value="Present" ${record.status === "Present" ? "selected" : ""}>Present</option>
                    <option value="Absent" ${record.status === "Absent" ? "selected" : ""}>Absent</option>
                    <option value="Late" ${record.status === "Late" ? "selected" : ""}>Late</option>
                </select>
            </td>
        `;
        recordsTable.appendChild(row);
    });
}

// Save updated attendance data back to localStorage
function saveEditedRecords() {
    const date = document.getElementById("edit-date").value;
    const allAttendance = JSON.parse(localStorage.getItem("attendanceData")) || {};

    if (!date || !allAttendance[date]) {
        alert("No attendance data found for the selected date.");
        return;
    }

    const updatedRecords = [];
    document.querySelectorAll("#attendance-records .attendance-status").forEach(select => {
        const studentId = select.closest("tr").children[0].textContent;
        const studentName = select.closest("tr").children[0].textContent;
        const status = select.value;
        updatedRecords.push({ studentId, studentName, status });
    });

    allAttendance[date] = updatedRecords;
    localStorage.setItem("attendanceData", JSON.stringify(allAttendance));
    alert("Attendance records updated successfully!");
}







// Open the Add Teacher Modal
function openAddTeacherModal() {
    document.getElementById("addTeacherModal").style.display = "block";
}

// Close the Add Teacher Modal
function closeAddTeacherModal() {
    document.getElementById("addTeacherModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    // Handle form submission for adding a teacher
    const openAddteacherModal = () => {
        document.getElementById("addTeacherModal").style.display = "block";
    };

     // Close the modal
    const closeAddTeacherModal = () => {
        document.getElementById("addSTeacherModal").style.display = "none";
    };

     // Handle form submission to add teacher
    document.getElementById("addTeacherForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const teacherId = document.getElementById("teacherId").value;
        const teacherName = document.getElementById("teacherName").value;
        const teacherGender = document.getElementById("teacherGender").value;
        const teacherAddress = document.getElementById("teacherAddress").value;
        const teacherPhone = document.getElementById("teacherPhone").value;
        const teacherEmail = document.getElementById("teacherEmail").value;
        const teacherQualification = document.getElementById("teacherQualification").value;
        const sectionHandled = document.getElementById("sectionHandled").value;
        const subjectHandled = document.getElementById("subjectHandled").value;

        // Create a new teacher row
        const teacherRow = document.createElement("tr");
        teacherRow.id = ' teacher-${teacherId}';

        teacherRow.innerHTML = `
            <td>${teacherId}</td>
            <td>${teacherName}</td>
            <td>${teacherGender}</td>
            <td>${teacherAddress}</td>
            <td>${teacherPhone}</td>
            <td>${teacherEmail}</td>
            <td>${teacherQualification}</td>
            <td>${sectionHandled}</td>
            <td>${subjectHandled}</td>
            <td>
                <div class="actions">
                    <span class="las la-eye" title="View" onclick="viewTeacher('${teacherId}')"></span>
                    <span class="las la-edit" title="Edit" onclick="editTeacher('${teacherId}')"></span>
                    <span class="las la-trash" title="Delete" onclick="deleteTeacher('${teacherId}')"></span>
                </div>
            </td>
        `;

        // Append the new row to the table
        document.getElementById("teacherList").appendChild(teacherRow);

        // Clear the form fields
        document.getElementById("addTeacherForm").reset();

        // Close the modal
        closeAddTeacherModal();
    });
});

// Function to edit teacher (This can be customized to your needs)
function editTeacher(teacherId) {
    alert('Edit teacher with ID: ' + teacherId);
}

// Function to delete teacher from the table
function deleteTeacher(teacherId) {
    const row = document.querySelector(`#teacherList tr td:first-child[textContent='${teacherId}']`).parentElement;
    row.remove();
}

// Function to open the View Teacher Modal with details
function viewTeacher(teacherId) {
    // Find the teacher row using the teacherId
    const teacherRow = document.getElementById(`teacher-${teacherId}`);
    if (!teacherRow) {
        alert("Teacher not found!");
        return;
    }

    // Extract data from the table row
    const teacherIdText = teacherRow.children[0].innerText; // Teacher ID
    const teacherName = teacherRow.children[1].innerText; // Teacher Name
    const teacherAddress = teacherRow.children[2].innerText; // Address
    const teacherPhone = teacherRow.children[3].innerText; // Phone
    const teacherEmail = teacherRow.children[4].innerText; // Email
    const teacherQualification = teacherRow.children[5].innerText; // Qualification
    const teacherSection = teacherRow.children[6].innerText; // Section Handled
    const teacherSubject = teacherRow.children[7].innerText; // Subject Handled

    // Populate the modal fields
    document.getElementById('viewTeacherId').value = teacherIdText;
    document.getElementById('viewTeacherName').value = teacherName;
    document.getElementById('viewTeacherAddress').value = teacherAddress;
    document.getElementById('viewTeacherPhone').value = teacherPhone;
    document.getElementById('viewTeacherEmail').value = teacherEmail;
    document.getElementById('viewTeacherQualification').value = teacherQualification;
    document.getElementById('viewTeacherSection').value = teacherSection;
    document.getElementById('viewTeacherSubject').value = teacherSubject;

    // Display the modal
    document.getElementById('viewTeacherModal').style.display = 'flex';
}

// Function to close the View Teacher Modal
function closeViewTeacherModal() {
    document.getElementById('viewTeacherModal').style.display = 'none';
}

// Function to open the Edit Teacher Modal with current details
function editTeacher(teacherId) {
    // Find the teacher row using the teacherId
    const teacherRow = document.getElementById(`teacher-${teacherId}`);
    if (!teacherRow) {
        alert("Teacher not found!");
        return;
    }

    // Extract data from the table row
    const teacherIdText = teacherRow.children[0].innerText; // Teacher ID
    const teacherName = teacherRow.children[1].innerText; // Teacher Name
    const teacherAddress = teacherRow.children[2].innerText; // Address
    const teacherPhone = teacherRow.children[3].innerText; // Phone
    const teacherEmail = teacherRow.children[4].innerText; // Email
    const teacherQualification = teacherRow.children[5].innerText; // Qualification
    const teacherSection = teacherRow.children[6].innerText; // Section Handled
    const teacherSubject = teacherRow.children[7].innerText; // Subject Handled

    // Populate the edit modal with the current data
    document.getElementById('editTeacherId').value = teacherIdText;
    document.getElementById('editTeacherName').value = teacherName;
    document.getElementById('editTeacherAddress').value = teacherAddress;
    document.getElementById('editTeacherPhone').value = teacherPhone;
    document.getElementById('editTeacherEmail').value = teacherEmail;
    document.getElementById('editTeacherQualification').value = teacherQualification;
    document.getElementById('editTeacherSection').value = teacherSection;
    document.getElementById('editTeacherSubject').value = teacherSubject;

    // Display the modal
    document.getElementById('editTeacherModal').style.display = 'flex';
}

// Function to close the Edit Teacher Modal
function closeEditTeacherModal() {
    document.getElementById('editTeacherModal').style.display = 'none';
}

// Function to save the edited teacher details
function saveTeacherDetails() {
    // Get updated values from the form
    const teacherId = document.getElementById('editTeacherId').value;
    const teacherName = document.getElementById('editTeacherName').value;
    const teacherAddress = document.getElementById('editTeacherAddress').value;
    const teacherPhone = document.getElementById('editTeacherPhone').value;
    const teacherEmail = document.getElementById('editTeacherEmail').value;
    const teacherQualification = document.getElementById('editTeacherQualification').value;
    const teacherSection = document.getElementById('editTeacherSection').value;
    const teacherSubject = document.getElementById('editTeacherSubject').value;

    // Find the teacher row using the teacherId
    const teacherRow = document.getElementById(`teacher-${teacherId}`);
    if (!teacherRow) {
        alert("Teacher not found!");
        return;
    }

    // Update the row with the new values
    teacherRow.children[1].innerText = teacherName;
    teacherRow.children[2].innerText = teacherAddress;
    teacherRow.children[3].innerText = teacherPhone;
    teacherRow.children[4].innerText = teacherEmail;
    teacherRow.children[5].innerText = teacherQualification;
    teacherRow.children[6].innerText = teacherSection;
    teacherRow.children[7].innerText = teacherSubject;

    // Close the modal
    closeEditTeacherModal();
}
// Function to delete the teacher row
function deleteTeacher(teacherId) {
    // Find the teacher row using the teacherId
    const teacherRow = document.getElementById(`teacher-${teacherId}`);
    if (!teacherRow) {
        alert("Teacher not found!");
        return;
    }

    // Ask for confirmation before deleting
    const confirmation = confirm("Are you sure you want to delete this teacher?");
    if (confirmation) {
        // Remove the teacher row from the table
        teacherRow.remove();
        alert("Teacher deleted successfully!");
    }
}
// Function to open the teacher modal
function openAddTeacherModal() {
    document.getElementById("addTeacherModal").style.display = "block";
}

// Function to close the teacher modal
function closeAddTeacherModal() {
    document.getElementById("addTeacherModal").style.display = "none";
}

// Handle form submission to add teacher
document.getElementById("addTeacherForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form
    const teacherId = document.getElementById("teacherId").value;
    const teacherName = document.getElementById("teacherName").value;
    const teacherAddress = document.getElementById("teacherAddress").value;
    const teacherPhone = document.getElementById("teacherPhone").value;
    const teacherEmail = document.getElementById("teacherEmail").value;
    const teacherQualification = document.getElementById("teacherQualification").value;
    const sectionHandled = document.getElementById("sectionHandled").value;
    const subjectHandled = document.getElementById("subjectHandled").value;

    // Create a new row
    const newRow = document.createElement("tr");
    newRow.id = `teacher-${teacherId}`; // Unique ID for the row

    // Create and populate cells within the row
    newRow.innerHTML = `
        <td>${teacherId}</td>
        <td>${teacherName}</td>
        <td>${teacherAddress}</td>
        <td>${teacherPhone}</td>
        <td>${teacherEmail}</td>
        <td>${teacherQualification}</td>
        <td>${sectionHandled}</td>
        <td>${subjectHandled}</td>
        <td>
            <button onclick="viewTeacher(${teacherId})">View</button>
            <button onclick="editTeacher(${teacherId})">Edit</button>
            <button onclick="deleteTeacher(${teacherId})">Delete</button>
        </td>
    `;

    // Append the row to the table body
    document.getElementById("teacherList").appendChild(newRow);

    // Clear the form for the next input
    document.getElementById("addTeacherForm").reset();

    // Close the modal after adding the row
    closeAddTeacherModal();
});
