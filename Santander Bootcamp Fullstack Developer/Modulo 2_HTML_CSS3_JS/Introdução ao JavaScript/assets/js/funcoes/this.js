const pessoa = {
    firstName: "André",
    lastName: "Reis",
    id: 1,
    fullName: function() {
        return console.log('Full Name: ', this.firstName + ' ' + this.lastName);
    },
    getId: function() {
        return console.log('ID: ', this.id);
    }
};
pessoa.getId();
pessoa.fullName();