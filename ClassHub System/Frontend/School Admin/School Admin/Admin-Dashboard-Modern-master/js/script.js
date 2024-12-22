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
            label: 'Monthly Attendance Reports (%)',
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
                        text: 'Attendance',
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

//STUDENT
// Function to open the modal
function openAddStudentModal() {
    document.getElementById("addStudentModal").style.display = "block";
}

// Function to close the modal
function closeAddStudentModal() {
    document.getElementById("addStudentModal").style.display = "none";
}

// Handle form submission for adding student
document.getElementById("addStudentForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the values from the form
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const studentEmail = document.getElementById("studentEmail").value;
    const studentSection = document.getElementById("studentSection").value;
    const studentGender = document.getElementById("studentGender").value;
    const studentDetails = document.getElementById("studentDetails").value;
    const studentAddress = document.getElementById("studentAddress").value;
    const studentBirthday = document.getElementById("studentBirthday").value;
    const parentEmail = document.getElementById("parentEmail").value;
    const parentPhone = document.getElementById("parentPhone").value;

    // Create a new table row
    const newRow = document.createElement("tr");
    newRow.id = `student-${studentId}`;  // Set a unique ID for each student row

    // Add data into the row
    newRow.innerHTML = `
        <td style="border: 2px solid #ddd; padding: 8px;">${studentId}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentName}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentEmail}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentSection}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentGender}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentDetails}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentAddress}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${studentBirthday}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${parentEmail}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">${parentPhone}</td>
        <td style="border: 2px solid #ddd; padding: 8px;">
            <div class="actions" style="display: flex; gap: 10px; align-items: center;">
                <span class="las la-eye" style="font-size: 20px; cursor: pointer;" title="View" onclick="viewStudent(${studentId})"></span>
                <span class="las la-edit" style="font-size: 20px; cursor: pointer;" title="Edit" onclick="editStudent(${studentId})"></span>
                <span class="las la-trash" style="font-size: 20px; cursor: pointer;" title="Delete" onclick="deleteStudent(${studentId})"></span>
            </div>
        </td>
    `;

    // Append the row to the student table
    document.getElementById("studentList").appendChild(newRow);

    // Reset the form for the next input
    document.getElementById("addStudentForm").reset();

    // Close the modal after adding the student
    closeAddStudentModal();
});

// Function to open the View Student Modal with details
function viewStudent(studentId) {
    // Find the student row using the studentId
    const studentRow = document.getElementById(`student-${studentId}`);
    if (!studentRow) {
        alert("Student not found!");
        return;
    }

    // Extract data from the table row
    const studentIdText = studentRow.children[0].innerText; // Student ID
    const studentName = studentRow.children[1].innerText; // Student Name
    const studentEmail = studentRow.children[2].innerText; // Email Address
    const studentGrade = studentRow.children[3].innerText; // Grade/Section
    const studentGender = studentRow.children[4].innerText; // Gender
    const studentDetails = studentRow.children[5].innerText; // Details
    const studentAddress = studentRow.children[6].innerText; // Address
    const studentBirthday = studentRow.children[7].innerText; // Birthday
    const parentEmail = studentRow.children[8].innerText; // Parent Email
    const parentContact = studentRow.children[9].innerText; // Parent Contact Number

    // Populate the modal fields
    document.getElementById('viewStudentId').value = studentIdText;
    document.getElementById('viewStudentName').value = studentName;
    document.getElementById('viewStudentEmail').value = studentEmail;
    document.getElementById('viewStudentGrade').value = studentGrade;
    document.getElementById('viewStudentGender').value = studentGender;
    document.getElementById('viewStudentDetails').value = studentDetails;
    document.getElementById('viewStudentAddress').value = studentAddress;
    document.getElementById('viewStudentBirthday').value = studentBirthday;
    document.getElementById('viewParentEmail').value = parentEmail;
    document.getElementById('viewParentContact').value = parentContact;

    // Display the modal
    document.getElementById('viewStudentModal').style.display = 'flex';
}

// Function to close the View Student Modal
function closeViewStudentModal() {
    document.getElementById('viewStudentModal').style.display = 'none';
}
// Function to open the Edit Student Modal with current details
function editStudent(studentId) {
    // Find the student row using the studentId
    const studentRow = document.getElementById(`student-${studentId}`);
    if (!studentRow) {
        alert("Student not found!");
        return;
    }

    // Extract data from the table row
    const studentIdText = studentRow.children[0].innerText; // Student ID
    const studentName = studentRow.children[1].innerText; // Student Name
    const studentEmail = studentRow.children[2].innerText; // Email
    const studentGrade = studentRow.children[3].innerText; // Grade
    const studentGender = studentRow.children[4].innerText; // Gender
    const studentDetails = studentRow.children[5].innerText; // Details
    const studentAddress = studentRow.children[6].innerText; // Address
    const studentBirthday = studentRow.children[7].innerText; // Birthday
    const parentEmail = studentRow.children[8].innerText; // Parent Email
    const parentContact = studentRow.children[9].innerText; // Parent Contact

    // Populate the edit modal with the current data
    document.getElementById('editStudentId').value = studentIdText;
    document.getElementById('editStudentName').value = studentName;
    document.getElementById('editStudentEmail').value = studentEmail;
    document.getElementById('editStudentGrade').value = studentGrade;
    document.getElementById('editStudentGender').value = studentGender;
    document.getElementById('editStudentDetails').value = studentDetails;
    document.getElementById('editStudentAddress').value = studentAddress;
    document.getElementById('editStudentBirthday').value = studentBirthday;
    document.getElementById('editParentEmail').value = parentEmail;
    document.getElementById('editParentContact').value = parentContact;

    // Display the modal
    document.getElementById('editStudentModal').style.display = 'flex';
}

// Function to close the Edit Student Modal
function closeEditStudentModal() {
    document.getElementById('editStudentModal').style.display = 'none';
}

// Function to save the edited student details
function saveStudentDetails() {
    // Get updated values from the form
    const studentId = document.getElementById('editStudentId').value;
    const studentName = document.getElementById('editStudentName').value;
    const studentEmail = document.getElementById('editStudentEmail').value;
    const studentGrade = document.getElementById('editStudentGrade').value;
    const studentGender = document.getElementById('editStudentGender').value;
    const studentDetails = document.getElementById('editStudentDetails').value;
    const studentAddress = document.getElementById('editStudentAddress').value;
    const studentBirthday = document.getElementById('editStudentBirthday').value;
    const parentEmail = document.getElementById('editParentEmail').value;
    const parentContact = document.getElementById('editParentContact').value;

    // Find the student row using the studentId
    const studentRow = document.getElementById(`student-${studentId}`);
    if (!studentRow) {
        alert("Student not found!");
        return;
    }

    // Update the row with the new values
    studentRow.children[1].innerText = studentName;
    studentRow.children[2].innerText = studentEmail;
    studentRow.children[3].innerText = studentGrade;
    studentRow.children[4].innerText = studentGender;
    studentRow.children[5].innerText = studentDetails;
    studentRow.children[6].innerText = studentAddress;
    studentRow.children[7].innerText = studentBirthday;
    studentRow.children[8].innerText = parentEmail;
    studentRow.children[9].innerText = parentContact;

    // Close the modal
    closeEditStudentModal();
}
// Function to delete a student from the table
function deleteStudent(studentId) {
    // Confirm before deleting
    const confirmation = confirm("Are you sure you want to delete this student?");
    if (!confirmation) return;

    // Find the student row using the studentId
    const studentRow = document.getElementById(`student-${studentId}`);
    if (!studentRow) {
        alert("Student not found!");
        return;
    }

    // Remove the student row from the table
    studentRow.remove();

    // Optionally, show a success message
    alert("Student deleted successfully.");
}
const students = {
    101: {
        id: 101,
        name: "John Doe",
        email: "johndoe@example.com",
        grade: "Grade 5",
        gender: "Male",
        address: "123 Main St",
        dob: "2005-06-15",
        parentEmail: "parent@example.com",
        phone: "555-1234",
        profilePic: "path/to/profile-pic.jpg", // Add a path to the profile picture
    },
    // Add more students as needed
};

 // Function to show the student details in the modal
 function showStudentDetails(studentId) {
        // Get the table row element by the student ID
        const row = document.getElementById('student-' + studentId);

        // Extract data from the table row
        const cells = row.getElementsByTagName('td');
        const studentDetails = {
            id: cells[0].innerText,
            name: cells[1].innerText,
            email: cells[2].innerText,
            grade: cells[3].innerText,
            gender: cells[4].innerText,
            details: cells[5].innerText,
            address: cells[6].innerText,
            dob: cells[7].innerText,
            parentEmail: cells[8].innerText,
            parentPhone: cells[9].innerText
        };

        // Update the modal content with student details
        document.getElementById('student-id').innerText = studentDetails.id;
        document.getElementById('student-name').innerText = studentDetails.name;
        document.getElementById('student-email').innerText = studentDetails.email;
        document.getElementById('student-grade').innerText = studentDetails.grade;
        document.getElementById('student-gender').innerText = studentDetails.gender;
        document.getElementById('student-details').innerText = studentDetails.details;
        document.getElementById('student-address').innerText = studentDetails.address;
        document.getElementById('student-dob').innerText = studentDetails.dob;
        document.getElementById('student-parent-email').innerText = studentDetails.parentEmail;
        document.getElementById('student-parent-phone').innerText = studentDetails.parentPhone;

        // Show the modal
        const modal = document.getElementById('studentModal');
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('studentModal');
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of the modal content
    window.onclick = function(event) {
        const modal = document.getElementById('studentModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
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
