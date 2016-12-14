
var client = contentful
		.createClient({
			space : 'wirf79kf2czn',
			accessToken : 'cffca3d5202f9db0f8e07b8b4243a48881db9ba2d8bf83a7fce80ed35403482e'
		})

function getEntries() {

	client.getEntries().then(function(entries) {
		// log the title for all the entries that might have it
		entries.items.forEach(function(entry) {
			if (entry.fields.title) {
				document.getElementById("blogPost").innerHTML = entry.fields.title
			}
		})
	})
}

function getEntry() {
	client.getEntry('7ipkCiJr0WYK0qQKYam2w2')
	.then(function (entry) {
	  // logs the entry metadata
	  console.log(entry.sys)

	  // logs the field with ID title
	  console.log(entry.fields.title)
	})
}