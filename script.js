// your JS code here.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articles = ['a', 'an', 'the'];

function sortKey(name) {
  const words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    return words.slice(1).join(' ').toLowerCase();
  }
  return name.toLowerCase();
}

const sortedBands = [...bands].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));

const list = document.getElementById('bands');
sortedBands.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);
});