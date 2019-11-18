import getData from './ApiClient'

const GetRepos = async (userName) => {
  const reposURL = `https://api.github.com/users/${userName}/repos`
  const repos = await getData(reposURL)
  const Repos = {
    render: () => {
      const view =  /*html*/`
      <div class="content">
        <ul>
          <h2 class="underline">Repositories</h2>
          ${
            // map each element as a list item, removing comas generated by the template literal.
            repos.map(repo =>
              `
              <li>
                <h3 class="octicon-star">${repo.name}</h3>
                  <div>
                    <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                      <span>${repo.forks_count}</span>
                    <svg viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                      <span>${repo.stargazers_count}</span>
                  </div>
              </li>
            `).join('')
            }
        </ul>
      </div>
      `
      return view
    },
  }

  // create a new div element 
  const newDiv = document.createElement("div");
  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("container");
  newDiv.innerHTML = Repos.render();
  currentDiv.append(newDiv);
  return repos
}

export default GetRepos