```json
{
  currentUser: {
    id: 1,
    name: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createBill: {errors: ["Amount can't be zero"]}
  },
  bills: {
    1: {
      description: "My first Bill",
      body: "My friend you owe me money",
      user_pay_id: 1,
      user_owe_id: 4,
      amount: 100.56
      comments: {
        user_id: 1,
        text: "I did not actually pay for this"
      }
    }
  },
  friends: {
    1: {
      user_id: 4,
      name: "Jeannie",
      email: "jeanie@jeanie.com"
    },
  }
  requests: {
    2: {
      user_id: 5,
      name: "Josh",
      email: "josh@josh.com"
    }
  }
}
```
