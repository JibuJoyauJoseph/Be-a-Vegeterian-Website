const recipes = [
  {
    id: "Almond-milk-iced-coffee",
    category: "breakfast",
    title: "Almond milk iced coffee",
    diet: "vegan",
    description: "Almond milk mixed with iced coffee",
    image: "Almond-milk-iced-coffee.jpg",
    imageAlt: "Almond milk iced coffee",
    ingredients: [
      "Caster sugar, to taste, if preferred",
      "1 double espresso",
      "10 ice cubes",
      "200 ml almond milk",
    ],
    method: [
      "If you like your coffee sweet, stir the sugar into the hot espresso until dissolved.",
      "Fill a glass with ice cubes.",
      "Pour over the espresso, then add the almond milk and stir well with a straw. Serve immediately.",
    ],
  },
  {
    id: "avocado-toast",
    category: "breakfast",
    title: "Avocado garden toast",
    diet: "vegan",
    description: "Golden toast, silky avocado, and whatever's fresh.",
    image: "avocado-garden-toast.jpg",
    imageAlt: "Avocado toast with fresh toppings",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1 tbsp lemon juice",
      "Pinch of sea salt and black pepper",
      "Fresh tomato, cucumber, herbs, or radish, to serve",
    ],
    method: [
      "Toast the bread until golden and crisp.",
      "Mash the avocado with lemon juice, salt, and pepper until smooth.",
      "Spread the avocado over the toast and top with your chosen fresh vegetables and herbs.",
    ],
  },
  {
    id: "green-glow-smoothie",
    category: "breakfast",
    title: "Green glow smoothie",
    diet: "vegan",
    description: "A cool, fruity blend to brighten up your morning.",
    image: "green-glow-smoothie.jpg",
    imageAlt: "Fresh green smoothie in a glass",
    ingredients: [
      "1 banana",
      "1 cup spinach",
      "1 kiwi",
      "1 cup pineapple chunks",
      "200 ml coconut water",
      "A few ice cubes",
    ],
    method: [
      "Add all ingredients to a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass and serve immediately.",
    ],
  },
  {
    id: "hummus-crudites",
    category: "lunch",
    title: "Hummus & garden crunch",
    diet: "vegan",
    description: "Silky hummus with colorful vegetables for dipping.",
    image: "hummus-garden-crunch.jpg",
    imageAlt: "Hummus served with fresh vegetables",
    ingredients: [
      "200 g hummus",
      "1 carrot, cut into sticks",
      "1 cucumber, sliced",
      "1 red pepper, chopped",
      "A handful of sugar snap peas",
      "A squeeze of lemon juice",
    ],
    method: [
      "Arrange the hummus in a shallow bowl and drizzle with a little lemon juice.",
      "Place the vegetables around it in a colorful platter.",
      "Serve straight away for a fresh, crunchy lunch.",
    ],
  },
  {
    id: "rainbow-grain-bowl",
    category: "lunch",
    title: "Rainbow grain bowl",
    diet: "vegan",
    description: "A bright, satisfying bowl with grains and crisp greens.",
    image: "rainbow-grain-bowl.jpg",
    imageAlt: "Colorful vegetable and grain bowl",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cup cooked brown rice",
      "1 cup shredded lettuce",
      "1/2 cucumber, diced",
      "1 carrot, grated",
      "1/2 avocado, sliced",
      "1 tbsp pumpkin seeds",
      "2 tbsp lemon-tahini dressing",
    ],
    method: [
      "Divide the grains between bowls.",
      "Top with lettuce, cucumber, carrot, avocado, and pumpkin seeds.",
      "Drizzle over the lemon-tahini dressing and serve.",
    ],
  },
  {
    id: "tomato-mozzarella",
    category: "lunch",
    title: "Tomato & mozzarella bites",
    diet: "vegetarian",
    description: "Juicy tomatoes, creamy mozzarella, and fragrant herbs.",
    image: "tomato-mozzarella-bites.jpg",
    imageAlt: "Fresh tomato and mozzarella appetizer",
    ingredients: [
      "8 cherry tomatoes",
      "8 basil leaves",
      "8 mozzarella pearls",
      "1 tbsp balsamic glaze",
      "Pinch of cracked black pepper",
    ],
    method: [
      "Halve the tomatoes and place them on a platter.",
      "Top each with a basil leaf and a mozzarella pearl.",
      "Finish with balsamic glaze and black pepper before serving.",
    ],
  },
  {
    id: "chickpea-curry",
    category: "mains",
    title: "Cozy chickpea curry",
    diet: "vegan",
    description: "A warming, gently spiced favorite for sharing.",
    image: "cozy-chickpea-curry.jpg",
    imageAlt: "A bowl of chickpea curry",
    ingredients: [
      "1 tbsp coconut oil",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 tbsp curry powder",
      "400 g chickpeas, drained",
      "400 g chopped tomatoes",
      "200 ml coconut milk",
      "Salt and pepper, to taste",
    ],
    method: [
      "Warm the oil in a pan and soften the onion and garlic.",
      "Stir in the curry powder, chickpeas, tomatoes, and coconut milk.",
      "Simmer until thickened and serve with rice or flatbread.",
    ],
  },
  {
    id: "mushroom-pasta",
    category: "mains",
    title: "Creamy mushroom pasta",
    diet: "vegetarian",
    description: "Tender pasta with savory mushrooms and a velvety sauce.",
    image: "creamy-mushroom-pasta.jpg",
    imageAlt: "Pasta with mushrooms and herbs",
    ingredients: [
      "250 g pasta",
      "250 g mushrooms, sliced",
      "2 garlic cloves, minced",
      "1 tbsp olive oil",
      "150 ml oat cream",
      "1 tbsp nutritional yeast",
      "Fresh parsley, chopped",
      "Salt and pepper, to taste",
    ],
    method: [
      "Cook the pasta according to the packet instructions and reserve a little cooking water.",
      "Sauté the mushrooms and garlic in olive oil until golden.",
      "Stir in the oat cream and nutritional yeast, then toss with the pasta and parsley.",
    ],
  },
  {
    id: "roasted-veg-tacos",
    category: "mains",
    title: "Roasted veggie tacos",
    diet: "vegan",
    description: "Smoky roasted vegetables tucked into warm tortillas.",
    image: "roasted-veggie-tacos.jpg",
    imageAlt: "Colorful vegetable tacos",
    ingredients: [
      "1 courgette, sliced",
      "1 red pepper, sliced",
      "1 red onion, wedges",
      "1 tbsp olive oil",
      "1 tsp smoked paprika",
      "8 small tortillas",
      "1 avocado, sliced",
      "Fresh coriander, to serve",
    ],
    method: [
      "Toss the vegetables with oil and smoked paprika, then roast until tender and charred.",
      "Warm the tortillas.",
      "Fill each tortilla with roasted veg, avocado, and coriander, then serve.",
    ],
  },
  {
    id: "lemon-olive-oil-cake",
    category: "desserts",
    title: "Lemon olive oil cake",
    diet: "vegan",
    description: "A tender, sunny slice with a bright citrus finish.",
    image: "lemon-olive-oil-cake.jpg",
    imageAlt: "Slice of lemon cake",
    ingredients: [
      "1 cup flour",
      "1/2 cup sugar",
      "1 tsp baking powder",
      "1/2 cup olive oil",
      "1/2 cup plant milk",
      "1 lemon, zested and juiced",
      "1 tsp vanilla extract",
    ],
    method: [
      "Mix the dry ingredients in one bowl and the wet ingredients in another.",
      "Combine the mixtures until just smooth.",
      "Bake until golden, then cool before dusting with extra lemon zest.",
    ],
  },
  {
    id: "chocolate-brownies",
    category: "desserts",
    title: "Fudgy chocolate brownies",
    diet: "vegetarian",
    description: "Deep chocolate, crisp edges, and a soft middle.",
    image: "fudgy-chocolate-brownies.jpg",
    imageAlt: "Rich chocolate brownies",
    ingredients: [
      "200 g dark chocolate",
      "100 g vegan butter",
      "3 tbsp cocoa powder",
      "100 g sugar",
      "2 eggs",
      "60 g flour",
      "A pinch of salt",
    ],
    method: [
      "Melt the chocolate and butter together, then stir in the sugar and eggs.",
      "Fold in the cocoa powder, flour, and salt.",
      "Bake until set, cool slightly, and slice into squares.",
    ],
  },
  {
    id: "coconut-chia-cups",
    category: "desserts",
    title: "Coconut chia cups",
    diet: "vegan",
    description: "Cool, creamy chia pudding finished with fresh fruit.",
    image: "coconut-chia-cups.jpg",
    imageAlt: "Coconut chia pudding with fruit",
    ingredients: [
      "3 tbsp chia seeds",
      "200 ml coconut milk",
      "100 ml oat milk",
      "1 tbsp maple syrup",
      "1/2 tsp vanilla extract",
      "Fresh berries or mango, to serve",
    ],
    method: [
      "Whisk the chia seeds with the coconut milk, oat milk, maple syrup, and vanilla.",
      "Leave the mixture to thicken in the fridge for at least 2 hours.",
      "Top with berries or mango before serving.",
    ],
  },
];

const dialog = document.querySelector(".recipe-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDiet = document.querySelector("#dialog-diet");
const dialogDescription = document.querySelector("#dialog-description");
const dialogIngredients = document.querySelector("#dialog-ingredients");
const dialogMethod = document.querySelector("#dialog-method");

function renderRecipes() {
  document.querySelectorAll(".recipe-grid").forEach((grid) => {
    const category = grid.dataset.category;
    grid.innerHTML = recipes
      .filter((recipe) => recipe.category === category)
      .map((recipe) => `
        <button class="recipe-card" type="button" data-recipe="${recipe.id}" data-diet="${recipe.diet}">
          <span class="recipe-image" role="img" aria-label="${recipe.imageAlt}" style="background-image: url('assets/${recipe.image}')">
            <span class="diet-tag">${recipe.diet}</span>
          </span>
          <span class="card-content">
            <strong>${recipe.title}</strong>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </span>
        </button>
      `)
      .join("");
  });
}

function openRecipe(recipe) {
  dialogTitle.textContent = recipe.title;
  dialogDiet.textContent = `${recipe.diet} recipe`;
  dialogDescription.textContent = recipe.description;
  dialogIngredients.replaceChildren(...(recipe.ingredients || []).map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    return item;
  }));
  dialogMethod.replaceChildren(...(recipe.method || []).map((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    return item;
  }));
  dialog.showModal();
}

renderRecipes();

document.querySelectorAll(".recipe-grid").forEach((grid) => {
  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".recipe-card");
    if (!card) return;
    const recipe = recipes.find((item) => item.id === card.dataset.recipe);
    if (!recipe) throw new Error(`Recipe not found: ${card.dataset.recipe}`);
    openRecipe(recipe);
  });
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll(".recipe-section").forEach((section) => {
      const cards = [...section.querySelectorAll(".recipe-card")];
      let visibleCount = 0;
      cards.forEach((card) => {
        const visible = filter === "all" || card.dataset.diet === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      section.classList.toggle("is-empty", visibleCount === 0);
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
