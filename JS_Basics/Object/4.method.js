const apple = {
  name : 'apple',
  display : function() {
    console.log(`${this.name}: π`); // κ°μ²΄μμμ λ΄ μμ μ λ°μ΄ν°μ μ κ·Όν λλ this.key
  },
};

apple.display();