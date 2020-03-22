const listElement = document.querySelector('ul');
const formElement = document.querySelector('form');
const unsubButton = document.querySelector('button');

const addRecipe = (recipe, id) => {
	let dateCreated = (recipe["created at"].toDate());
	let html = `
		<li data-id="${id}">
			<div>${recipe.title}</div>
			<div>${dateCreated}</div>
			<button class="btn btn-danger btn-sm my-2">delete</button>
		</li>
	`;
	listElement.innerHTML += html;
}

const deleteRecipe = (id) => {
	const recipes = document.querySelectorAll('li');
	recipes.forEach(recipe => {
		if (recipe.getAttribute('data-id') === id) {
			recipe.remove();
		}
	});
}

// the real-time listener:
const unsub = db.collection('recipes').onSnapshot(snapshot => {
	snapshot.docChanges().forEach(change => {
		const doc = change.doc;
		if (change.type === 'added') {
			addRecipe(doc.data(), doc.id);
		} else if (change.type === 'removed') {
			deleteRecipe(doc.id);
		}
	});
});

// add documents
formElement.addEventListener('submit', e => {
	e.preventDefault();

	const now = new Date();
	const recipe = {
		"title": formElement.recipe.value,
		"created at": firebase.firestore.Timestamp.fromDate(now)
	};

	db.collection('recipes').add(recipe).then(() => {
		alert('Recipe added!');
	}).catch(err => {
		console.log(err);
	})
});

// deleting data
listElement.addEventListener('click', e => {
	if (e.target.tagName === "BUTTON") {
		const id = e.target.parentElement.getAttribute('data-id');
		db.collection('recipes').doc(id).delete().then(() => {
			console.log(`${id} recipe deleted`);
		});
	}
})

unsubButton.addEventListener('click', () => {
	unsub();
	console.log("unsubscribed from collection changes");
});