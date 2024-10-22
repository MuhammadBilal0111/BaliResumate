export const formFields = [
  {
    id: "jobTitle",
    label: "Job Title",
    type: "text",
    placeholder: "Enter Job Title",
  },
  { id: "firstName", type: "text", label: "First Name" },
  { id: "lastName", type: "text", label: "Last Name" },
  { id: "email", type: "text", label: "Email" },
  { id: "phone", type: "phone", label: "Phone" },
  { id: "address", type: "text", label: "Addess" },
  { id: "postalCode", type: "text", label: "Postal Code" },
];
export const additionalFormFields = [
  {
    id: "drivingLicense",
    type: "text",
    label: "Driving License",
    tooltipContent:
      "Include this section if your profession requires a certain type of license. If not, leave it blank",
  },
  {
    id: "nationality",
    type: "text",
    label: "Nationality",
    tooltipContent:
      "Include your nationality if it is relevant to your position. If not, leave it blank",
  },
  {
    id: "placeOfBirth",
    type: "text",
    label: "Place Of Birth",
  },
  {
    id: "dateOfBirth",
    type: "date",
    label: "Date of birth",
    tooltipContent:
      "Add your date of birth only if it is a relevant requirement for your position. In most cases, leave this blank.",
  },
];
