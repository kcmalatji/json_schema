module.exports = {
  schema: {
    title: "Product registration form",
    description: "A simple form example.",
    type: "object",
    // required: ["firstName", "lastName"],
    properties: {
      image: {
        "type": "string",
        "title":"",
        "media": {
          "binaryEncoding": "base64",
          "type": "image/png",

        },
        "default": "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png"
      },
      principalDebit: {
        type: "integer",
        title: "Principal debit(Loan amount)?:",
        
      },recalculate: {
        type: "string",
        // title: "Recalculate",
        
      },
      annualInterestRate: {
        type: "string",
        title: "Annual interest rate:",
        
      },
      initiationFee: {
        type: "integer",
        title: "Initiation Fee:",
        
      },
      monthlyServiceFee: {
        type: "integer",
        title: "Monthly service fee:",
        
      }, totalMonthlyRepayable: {
        type: "integer",
        title: "Total Monthly Repayable:",
        
      },
      customerProtectionPlan: {
        type: "integer",
        title: "Customer Protection Plan:",
        
      },
      firstInstallmentDate: {
        type: "integer",
        title: "First installment Date:",
        
      },
      TotalCostofCredit: {
        type: "integer",
        title: "Total Cost of Credit:",
        
      },
      totalInterestPayable: {
        type: "integer",
        title: "Total Interest Payable:",
        
      },
      
      loanPurpose: {
        type: "array",
        title: "Loan Purpose:",
        items: {
        enum:["BUILDING MATERIAL","BUY FOOD","CLOTHING","DEBT CONSOLIDATION","FUNERAL","FIX A CAR","HOME MAINTENANCE","SCHOOL FEES","START A BUSINESS","UNEXPECTED MEDICAL EXPENSES","WATER/ELECTRICITY","EDUCATION","STUDY LOAN"]
        }, 
      },







    },
  },
  uiSchema: {
    image:{
      "ui:options": {
        inputType: "image",
      }
      
    },
    recalculate:{
      "ui:options": {
        inputType: "submit",
      }
      
    }


    // age: {
    //   "ui:widget": "updown",
    //   "ui:title": "Age of person",
    //   "ui:description": "(earthian year)",
    // },
    // bio: {
    //   "ui:widget": "textarea",
    // },
    // password: {
    //   "ui:widget": "password",
    //   "ui:help": "Hint: Make it strong!",
    // },
    // date: {
    //   "ui:widget": "alt-datetime",
    // },
    // telephone: {
    //   "ui:options": {
    //     inputType: "tel",
    //   },
    // },
  },
  formData: {
    recalculate:"Recalculate"
    // lastName: "Norris",
    // age: 75,
    // bio: "Roundhouse kicking asses since 1940",
    // password: "noneed"
  },
};
