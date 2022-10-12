//! FETCHING AND ADDING UNIVERSITY NAMES FORM API

url = "http://universities.hipolabs.com/search?country=India"
fetch(url).then(res => {
    return res.json();
}).then(data => {
    data.forEach(ele => {
        createOption(ele.name)
    });
})

const university = document.getElementById("university")

// CREATING AND ADDING COLLEGE OPTIONS TO UNIVERSITY SELECT
const createOption = (college) => {
    let newOption = document.createElement("option")
    newOption.value = college;
    newOption.innerHTML = college;

    university.appendChild(newOption)
}


const submitBtn = document.getElementById("submit-btn")

// HANDLING SUBMIT BUTTON AND VALIDATING FORM
submitBtn.addEventListener("click", (e) => {
    // 
    e.preventDefault()

    const fname = document.getElementById("fname").value
    if (!validateFname(fname)) return false
    const lname = document.getElementById("lname").value

    const email = document.getElementById("email").value
    if (!validateEmail(email)) return false
    const mobile = document.getElementById("mobile").value
    if (!validateMobile(mobile)) return false

    const gender = document.getElementsByName('gender');
    const selectedGender = validateGender(gender)
    if (selectedGender == false) return false

    const dob = document.getElementById("dob").value
    if (!validateDob(dob)) return false

    const location = document.getElementById("location").value
    if (!validateLocation(location)) return false
    const university = document.getElementById("university").value
    if (!validateUniversity(university)) return false


    const html = document.getElementById("html").value
    const css = document.getElementById("css").value
    const javascript = document.getElementById("javascript").value

    // ON ALL SUCCESSFUL VALIDATION ADD DATA TO MOBILE
    addDataInModal(fname, lname, email, mobile, location, selectedGender, university, dob, html, css, javascript)

    //ADD CODE HERE FOR POST API TO ADD DATA TO DATABASE
})

// HANDLING CLEAR BUTTON
const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", (e) => {
    emptyFields()
    e.preventDefault()
})

// VALIDATING FUNCTIONS FOR INPUT FIELDS

const validateFname = (fname) => {
    if (fname.match(/^[a-zA-Z ]{3,20}$/)) {
        return true
    }
    else {
        alert("Please Enter Valid First Name")
        return false
    }
}
const validateEmail = (email) => {
    if (email.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)) {
        return true
    }
    else {
        alert("Please Enter Valid Email")
        return false
    }
}
const validateMobile = (mobile) => {
    if (mobile.match(/^[6-9]\d{9}$/gi)) {
        return true
    }
    else {
        alert("Please Enter Valid Mobile Number")
        return false
    }
}
const validateLocation = (location) => {
    if (location == "") {
        alert("Please Enter Your Location")
        return false
    }
    else {
        return true
    }
}
const validateGender = (gender) => {

    var isChecked = false;
    var selectedGender = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            isChecked = true;
            selectedGender = gender[i]
        }
    }
    if (!isChecked) {
        alert("Please Select your Gender Type");
        return false;
    }
    else {
        return selectedGender.value
    }
}
const validateUniversity = (university) => {
    if (university == "") {
        alert("Please Select Your University")
        return false
    }
    else {
        return true
    }
}
const validateDob = (dob) => {
    if (dob == "") {
        alert("Please Enter Your Date of Birth")
        return false
    }
    else {
        return true
    }
}

// HANDLING MODAL FUNCTIONS

const addDataInModal = (fname, lname, email, mobile, location, gender, university, dob, html, css, javascript) => {
    const userData = document.createElement("div")
    userData.classList.add("m-1", "p-1")
    userData.innerHTML = `<h5 class="text-center text-bg-success border rounded p-1">Details Submitted Successfully</h5>
    <p><span class="fw-bold">First name : &nbsp;</span> ${fname}</p>
    <p><span class="fw-bold">Last name : &nbsp;</span> ${lname}</p>
    <p><span class="fw-bold">Email : &nbsp;</span> ${email}</p>
    <p><span class="fw-bold">Mobile : &nbsp;</span> ${mobile}</p>
    <p><span class="fw-bold">Gender : &nbsp;</span> ${gender}</p>
    <p><span class="fw-bold">Date Of Birth : &nbsp;</span> ${dob}</p>
    <p><span class="fw-bold">Location : &nbsp;</span> ${location}</p>
    <p><span class="fw-bold">College/University : &nbsp;</span> ${university}</p>
    <p><span class="fw-bold">HTML : &nbsp;</span> ${html} / 100</p>
    <p><span class="fw-bold">CSS : &nbsp;</span> ${css} / 100</p>
    <p><span class="fw-bold">JavaScript : &nbsp;</span> ${javascript} / 100</p>`

    const modalData = document.getElementById("modal-data")
    modalData.appendChild(userData)

    viewModal()
}

const viewModal = () => {
    document.getElementById("user-modal").classList.remove("hide")
}
const closeModal = () => {
    console.log("clicked");
    document.getElementById("user-modal").classList.add("hide")

    //EMPTY FIELDS AFTER FORM SUBMISSION
    emptyFields()
}

const emptyFields = () => {
    document.getElementById("fname").value = null
    document.getElementById("lname").value = null
    document.getElementById("email").value = null
    document.getElementById("mobile").value = null
    document.getElementsByName('gender')
    document.getElementById("dob").value = null
    document.getElementById("location").value = null
    document.getElementById("university").value = null
    document.getElementById("html").value = null
    document.getElementById("css").value = null
    document.getElementById("javascript").value = null
}

// HANDLING ONCHANGE ERROR DISPLAY OF RED BORDER
document.getElementById("fname").addEventListener("change", (e) => {
    if (!validateFname(e.target.value)) {
        e.target.classList.add("border-danger")
    }
    else {
        e.target.classList.remove("border-danger")
    }
})
document.getElementById("email").addEventListener("change", (e) => {
    if (!validateEmail(e.target.value)) {
        e.target.classList.add("border-danger")
    }
    else {
        e.target.classList.remove("border-danger")
    }
})
document.getElementById("mobile").addEventListener("change", (e) => {
    if (!validateMobile(e.target.value)) {
        e.target.classList.add("border-danger")
    }
    else {
        e.target.classList.remove("border-danger")
    }
})
document.getElementById("location").addEventListener("change", (e) => {
    if (!validateLocation(e.target.value)) {
        e.target.classList.add("border-danger")
    }
    else {
        e.target.classList.remove("border-danger")
    }
})
document.getElementById("university").addEventListener("change", (e) => {
    if (!validateUniversity(e.target.value)) {
        e.target.classList.add("border-danger")
    }
    else {
        e.target.classList.remove("border-danger")
    }
})
document.getElementById("dob").addEventListener("change", (e) => {
    if (!validateDob(e.target.value)) {
        e.target.classList.add("border-danger")
    }
    else {
        e.target.classList.remove("border-danger")
    }
})

