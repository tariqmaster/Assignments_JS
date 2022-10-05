var name = " Muhammad Tariq \n S/O Atique Ahmed";
alert(name);

name = name.toLowerCase();
alert(`in lower case \n${name}`);

name = name.toUpperCase();
alert(`in Upper case \n${name}`);


  function toTitleCase(name) {
    return name.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  alert(toTitleCase(`in Title case \n${name}`));
