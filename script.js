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
    id: "Green-smoothie",
    category: "breakfast",
    title: "Green Smoothie",
    diet: "vegan",
    description: "Avocados, cucumbers, spinach and juices mix.",
    image: "Green-smoothie.jpg",
    imageAlt: "Green smoothie",
    ingredients: [
      "2 ripe avocados, peeled, stoned and diced",
      "1/4 cucumber diced",
      "35g | 1 1/4 oz | 1 cup baby spinach",
      "250 ml | 9 fl oz | 1 cup apple juice",
      "1 lime, juiced",
    ],
    method: [
      "Spread out the avocado and cucumber on a greaseproof lined baking tray and freeze for at least 2 hours. They can be transferred to a freezer bag and stored for future use or used straight away.",
      "Put the spinach in a blender with the apple juice and lime juice. Blend until smooth.",
      "Add the frozen avocado and cucumber and blend again until smooth, then pour into a large jar or glass and serve immediately.",
    ],
  },

  {
    id: "Ful medames",
    category: "breakfast",
    title: "Ful medames",
    diet: "vegan",
    description: "Prep time: 15 min . Difficulty: Easy . Servings: 2 . Can be frozen",
    image: "Ful-medames.jpg",
    imageAlt: "Ful medames",
    ingredients: [
      "1/2 tsp cumin seeds",
      "2 tbsp olive oil",
      "1 clove garlic, crushed",
      "2 spring onions, finely chopped",
      "400g | 14 oz canned broad beans",
      "1/2 lemon, juiced",
      "1 1/2 tbsp tahini paste",
      "1 pinch paprika",
      "Salad, flatbread and pickles, to serve",
    ],
    method: [
      "Dry fry the cumin seeds in a saucepan until fragrant and popping, then coarsely grind with a pestle and mortar.",
      "Add the oil to the same pan and fry the garlic and spring onions for 2 minutes.",
      "Tip in the broad beans with their canning liquid and simmer for 5 minutes.",
      "Stir the lemon juice and ground cumin into the tahini paste with enough water to make a pourable consistency, then stir it into the beans. Season to taste with salt and pepper.",
      "Roughly mash the beans with a potato masher, then spoon into bowls. Sprinkle a little paprika on top and serve with salad. flatbread and a variety of pickled vegetables.",
    ],
  },

  {
    id: "Overnight-oats-with-chocolate-and-strawberries",
    category: "breakfast",
    title: "Overnight oats with chocolate and strawberries",
    diet: "vegan",
    description: "Prep time: 5 min . Chill time: 8hrs . Servings: 2 . Cannot be frozen",
    image: "Overnight-oats-with-chocolate-and-strawberries.jpg",
    imageAlt: "Overnight oats with chocolate and strawberries",
    ingredients: [
      "2 tbsp unsweetened cocoa powder",
      "1 tbsp maple syrup",
      "350 ml | 12 fl oz | 1 1/2 cups almond milk",
      "150g | 5 oz | 1 1/2 cups rolled porridge oats",
      "8 strawberries, sliced or quartered",
      "2 tbsp vegan chocolate spread",
    ],
    method: [
      "Stir the cocoa and maple syrup into the almond milk in a mixing bowl, then stir in the oats.",
      "Cover and chill overnight.",
      "Divide half of the strawberries between two glasses or bowls. Stir the oat mixture, then spoon it into the glasses and top with the rest of the strawberries.",
      "Put the chocolate spread in a heatproof bowl and microwave for 10 seconds or until it goes runny. Drizzle it over the strawberries and serve immediately.",
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
    id: "Sausage-breakfast-wrap",
    category: "breakfast",
    title: "Sausage breakfast wrap",
    diet: "vegan",
    description: "Prep time: 5 min . Cook time: 5 min . Difficulty: Easy . Servings: 2 . Cannot be frozen",
    image: "Sausage-breakfast-wrap.jpg",
    imageAlt: "Sausage breakfast wrap",
    ingredients: [
      "1/2 small red onion, thinly sliced",
      "1 lime, juiced",
      "1 tbsp olive oil",
      "2 vegan sausages, halved lengthways",
      "2 soft wheat tortillas",
      "4 tbsp hummus",
      "1 avocado, peeled, stoned and diced",
      "1 handful micro cress",
    ],
    method: [
      "Mix the onion with the lime juice and a pinch of salt and set aside to soften.",
      "Heat the oil in a frying pan and fry the sausages, cut side down, for 2 minutes or until nicely browned. Turn the sausages and fry the other side for 2 minutes.",
      "Spread the tortillas with hummus and arrange the sausages on top. Stir the avocado and tomato into the softened onions and spoon over the sausages and finish with a scattering of micro cress.",
      "Roll up the the tortillas and eat straight away, or wrap in a sheet of greaseproof paper and twist the ends for breakfast on the go.",
    ],
  },

   {
    id: "Spelt-pancakes-with-banana-and-caramel",
    category: "breakfast",
    title: "Spelt pancakes with banana and caramel",
    diet: "vegan",
    description: "Prep time: 30 min . Cook time: 5 min . Difficulty: Easy . Servings: 8 . Cannot be frozen",
    image: "Spelt-pancakes-with-banana-and-caramel.jpg",
    imageAlt: "Spelt pancakes with banana and caramel",
    ingredients: [
      "1 tbsp ground flaxseed",
      "250 ml | 9 fl oz | 1 cup coconut milk",
      "1 tbsp cider vinegar",
      "125g | 4 1/2 oz | 3/4 cup wholemeal spelt flour",
      "2 tsp baking powder",
      "1/4 tsp bicarbonate of soda",
      "1 tsp vanilla extract",
      "3 tbsp coconut oil, melted",
      "3 bananas, halved lengthways",
      "",
      "For the caramel sauce:",
      "75g | 2 1/2 oz | 1/2 cup light muscovado sugar",
      "75 ml | 2 1/2 fl oz | 1/3 cup coconut cream",

    ],
    method: [
      "First make the caramel sauce. Stir the sugar and coconut cream together in a small saucepan over a medium heat until the coconut cream melts and the sugar dissolves. Bring to a rolling boil and stir for 1 minute, then reduce the heat to its lowest setting and stir for 5 minutes. Transfer to a jug and set aside.",
      "To make the pancakes,stir 3 tbsp of warm water into the ground flaxseed and set aside to gel. Mix the coconut milk with the cider vinegar in a jug and set aside to curdle for 5 minutes. Next, mix the flour with the baking powder, bicarbonate of soda and a pinch of salt in a mixing bowl.",
      "Whisk the flax mixture into the coconut milk with the vanilla extract and 1 tbsp of melted coconut oil, then gradually whisk the liquid mixture into the flour.",
      "Heat 1 tbsp of coconut oil in a large frying pan. Use half of the pancake batter to make the first four pancakes. Cook the first side until bubbles appear on the surface and the edges are set, then flip them with a spatula. Cook for 1 more minute or until nicely browned, then transfer to a warm plate. Make the second batch of pancakes in the same way.",
      "Meanwhile, heat the remaining coconut oil in a separate frying pan. Fry the bananas, cut side down, for 2 minutes or until nicely caramelised at the edges. Carefully turn them over and cook for another minute.",
      "Stack the pancakes and arrange the bananas next to them. Pour over some of the caramel sauce and take the rest to the table.",
    ],
  },
  
  
  {
    id: "adjika",
    category: "lunch",
    title: "Adjika (tomato dip)",
    diet: "vegan",
    description: "Cook time: 5 min . Difficulty: Easy . Servings: 1 litre . Can be frozen",
    image: "adjika.jpg",
    imageAlt: "Adjika",
    ingredients: [
      "4 red peppers, deseeded and chopped",
      "4 red jalapenos, deseeded and chopped",
      "6 large ripe tomatoes, peeled and chopped",
      "8 cloves garlic, crushed",
      "1 tsp grounnd coriander",
      "1/2 tsp ground fenugreek",
      "1 tbsp dried marigold (calendula) flowers",
      " 1 tsp fine sea salt",
    ],
    method: [
      "Put all of the ingredients in a food processor or liquidiser and blend to a purée. Taste and adjust the seasoning with a little more salt if preferred.",
      "Serve as a dip with flatbread, as a condiment, or as a marinade for vegetables.",
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
    id: "baba-ganoush",
    category: "lunch",
    title: "Baba ganoush",
    diet: "vegan",
    description: "Prep time: 35 min . Difficulty: Easy . Servings: 4. Can be frozen",
    image: "baba-ganoush.jpg",
    imageAlt: "Baba ganoush",
    ingredients: [
      "1 large aubergine",
      "4 tbsp olive oil",
      "1/2 lemon, juiced and zest finely grated",
      "1 tbsp tahini paste",
      "1 clove garlic, crushed",
      "2 tbsp flat-leaf parsley, finely chopped",
      "1/2 pomegranate, seeds only",
    ],
    method: [
      "Cook the aubergine on a barbecue or under a hot grill until the skin is black and blistered all over.",
      "Leave to cool a little, then cut the aubergine in half and scoop out the flesh into a sieve. Press down with the back of a spoon to release as much liquid as possible.",
      "Finely chop the aubergine flesh then transfer to a serving bowl and stir in the rest of the ingredients.",
      "Season to taste with salt and pepper and serve at room temperature with a variety of pickled vegetables.",
    ],
  },

  {
    id: "crispy-potato-and-avocado-salad",
    category: "lunch",
    title: "Crispy potato and avocado salad",
    diet: "vegetarian",
    description: "Prep time: 30 min . Difficulty: Easy . Servings: 2 . Cannot be frozen",
    image: "crispy-potato.jpg",
    imageAlt: "Crispy potato and avocado salad",
    ingredients: [
      "6 new potatoes, very thinly sliced",
      "3 tbsp olive oil",
      "2 tsp seaweed sprinkles, or any finely chopped dried seaweed",
      "3 tbsp mayonnaise",
      "2 tsp lemon juice",
      "1 tsp Dijon mustard",
      "1/2 tsp garlic, crushed",
      "2 little gem lettuces, leaves separated",
      "1 avocado, peeled, stoned and sliced",
      "2 tbsp crispy fried onions",
    ],
    method: [
      "Preheat the oven to 200°C (180 fan) | 400°F | gas 6 and line a baking tray with greaseproof paper.",
      "Tip the sliced potatoes onto the baking tray and rub all over with 2 tbsp of the oil. Spread them out, season with salt and pepper and roast for 20 minutes, stirring and turning round halfway through.",
      "Meanwhile, grind the seaweed to a fine powder in a spice grinder. Tip it into a bowl and add the mayonnaise, lemon juice, mustard, yeast, garlic and remaining 1 tbsp of olive oil. Whisk to form a smooth dressing, thining it with a splash of water if necessary.",
      "Arrange the little gem and avocado in a shallow serving bowl. Give the potatoes a few minutes to cool down, then scatter on top. Drizzle over the dressing, sprinkle with crispу onions and serve immediately.",
    ],
  },

  {
    id: "smoked-tofu-and-shiitake-bao",
    category: "lunch",
    title: "Smoked tofu & Shiitake bao",
    diet: "vegetarian",
    description: "Prep & Cook time: 45 min . Risisng time: 2hrs . Steaming time: 8 min . Difficulty: Easy . Servings: 10 buns . Cannot be frozen",
    image: "smoked-tofu.jpg",
    imageAlt: "smoked tofu and shiitake bao",
    ingredients: [
      "350g | 12 oz | 2 1/3 cups plain flour, plus extra for rolling",
      "1 tsp easy blend dried yeast",
      "2 tbsp caster sugar",
      "1 tsp baking powder",
      "2 tbsp sunflower oil, plus extra for brushing",
      "400g | 14 oz | 4 cups fresh shiitake mushrooms, stalks removed, caps diced",
      "200 g 7 oz | 11/; cups smoked firm tofu, diced",
      "3 cloves garlic, crushed",
      "2 tbsp light soy sauce",
      "2 tbsp dark soy sauce",
      "2 tbsp sriracha chilli sauce",
      "1 tbsp light muscovado sugar",
      "1 tbsp toasted sesame oil",
      "4 spring onions, sliced",
      "1 bunch coriander, chopped",
      "2 mild red chillies, finely chopped",
    ],
    method: [
      "Mix the flour with the yeast, sugar and 0.5 teaspoon of salt, then gradually work in 210 ml of warm water. Knead the dough on a lightly floured surface for 5 minutes or until smooth and elastic, then cover and leave in a warm place to rise for 1 hour 30 minutes or until doubled in size.",
      "Meanwhile, make the filling. Heat the sunflower oil in a wok and stir-fry the shiitake mushrooms for 10 minutes or until starting to brown. Add the tofu and garlic and stir-fry for 2 more minutes. Add the soy sauces, sriracha and sugar. Bubble until reduced to a thick sticky glaze.",
      "Take the pan off the heat, stir in the sesame oil leave to marinate until you're ready to serve.",
      "When the dough is ready, knock it back and divide into ten even balls. Roll or pat the first ball into a 1 cm thick oval, then brush the top lightly with sunflower oil and fold it in half. Lay it on a small square of greaseproof paper, transfer to a tray and cover with a tea towel. Repeat with the rest of the balls, then leave the buns to rest for 30 minutes.",
      "Space the buns out in a steamer, still on their paper squares, and steam for 8 minutes.",
      "Open the buns, fill with the mushrooom mixture and garnish with spring onions, coriander and chillies. Serve immediately.",
    ],
  },

  {
    id: "butternut-squash-soup",
    category: "lunch",
    title: "Butternut squash soup",
    diet: "vegetarian",
    description: "Prep and Cook time: 15 min . Difficulty: Easy . Servings: 4 . Can be frozen",
    image: "butternut-squash.jpg",
    imageAlt: "Butternut squash soup",
    ingredients: [
      "3 tbsp olive oil, plus extra for the butternut squash seeds",
      "1 onion, finely chopped",
      "1 tbsp fresh thyme, chopped plus extra to garnish",
      "1 large butternut squash, (approx. 900g) peeled and cut into chunks, seeds reserved",
      "1 litre | 35 fl oz | 4 cups vegetable stock",
    ],
    method: [
      "Heat 2 tbsp of the oil in a large saucepan and fry the onion, garlic and thyme for 10 minutes to soften without colouring. Add the squash to the pan and sauté for 5 minutes.",
      "Pour in the stock and bring it to the boil, then reduce the heat a little bit and simmer for 25 minutes - or until the squash is tender.",
      "Blend the soup until smooth, using a liquidiser or immersion blender, then taste and adjust the seasoning.",
      "While the soup is cooking, preheat the oven to 150°C (130 fan) | 300°F | gas 2 and line a baking tray with greaseproof paper. Wash and dry the squash seeds, then rub them with oil and spread them out on the baking tray. Sprinkle with salt and roast for 20 minutes, turning halfway through.",
      "Ladle the soup into bowls and garnish with roasted squash seeds and thyme.",
    ],
  },

  {
    id: "vegetable-goulash",
    category: "lunch",
    title: "Vegetable goulash",
    diet: "vegetarian",
    description: "Prep time: 10 min . Cook time: 45 min . Difficulty: Easy . Servings: 4 . Can be frozen",
    image: "vegetable-goulash.jpg",
    imageAlt: "vegetable goulash",
    ingredients: [
      "1 litre | 35 fl oz | 4 cups vegetable stock",
      "175 g 6 oz |13/ cups textured vegetable protein",
      "2 tbsp olive oil",
      "1 large onion, sliced",
      "1 red pepper, deseeded and sliced",
      "1 green pepper, deseeded and sliced",
      "2 cloves garlic, sliced",
      "3 tsp sweet paprika",
      "1/2 tsp ground caraway",
      "2 tbsp tomato purée",
      "2 carrots, cut into thick batons",
      "1 large potato, cut into chunks",
      " closed-cap mushrooms, thickly sliced",
      "2 tbsp flat-leaf parsley, chopped",
      "Bread and vegeterian butter, to serve",
    ],
    method: [
      "Heat the vegetable stock. Pour the hot stock over the textured vegetable protein and leave to soak for 10 minutes, then drain, retaining the stock.",
      "Meanwhile, heat the oil in a large sauté pan and fry the onion and peppers over a medium-low heat for 10 minutes. Add the garlic and fry for another 5 minutes, being careful that it doesn't brown. Add the paprika, caraway and tomato purée and stir over a medium heat for 2 minutes.",
      "Gradually stir in the stock and bring to the boil, then add the carrots, potato and vegetable protein and simmer for 20 minutes or until the vegetables are nearly tender.",
      "Add the mushrooms and simmer for 5 minutes, then season to taste with salt and pepper.",
      "Sprinkle with parsley and serve with bread and vegeterian butter.",
    ],
  },

  {
    id: "cashew-cheese",
    category: "lunch",
    title: "Cashew cheese",
    diet: "vegetarian",
    description: "Prep & Cook time: 20 min . Chilling time: 8hrs . Difficulty: Easy . Servings: 8 . Cannot be frozen",
    image: "cashew-cheese.jpg",
    imageAlt: "Cashew cheese",
    ingredients: [
      " 250 g 9oz 2 cups raw cashews, soaked in cold water for 12 hours",
      "60 ml | 2 fl oz | 1/ cup lemon juice",
      "2 tbsp white miso paste",
      "1 tsp garlic powder",
      "2 tbsp nutritional yeast",
      "2 tbsp olive oil",
      "3 tbsp red pepper or tomato flakes",
      "3 tbsp dried wild garlic, or dried chives",
    ],
    method: [
      "Drain the cashews and transfer them to a food processor with the lemon juice, miso paste, garlic powder, nutritional yeast and oil. Add 200 ml of water and blend until creamy and completely smooth, pausing to scrape down the sides occasionally. Taste the mixture and add a little salt if needed.",
      "Line a large sieve with a clean tea towel and set it over a bowl. Scrape in the cashew cream, then gather up the sides and secure with an elastic band.",
      "Leave to drain and firm up in the fridge for 8-12 hours or until it reaches your preferred texture.",
      "Mix the pepper or tomato flakes with the dried wild garlic or chives on a plate. Unwrap the cheese and roll the edges in the mixture (or all over for a fuller flavour).",
      "Serve immediately, or store in the fridge and eat within 4 days.",
    ],
  },

  {
    id: "chapati-with-sweet-potato-and-mango-spread",
    category: "lunch",
    title: "Sweet Potato Paratha",
    diet: "vegetarian",
    description: "Prep & Cook time: 45 min . Baking time: 30 min . Chapati cooking time: 2 min (each) . Difficulty: Easy . Servings: 12 chapatis . Cannot be frozen",
    image: "chapati-with-mango.jpg",
    imageAlt: "Sweet potato paratha",
    ingredients: [
      "1 sweet potato",
      "1 ripe mango, peeled, stoned and diced",
      "1 lime, juiced and zest finely grated",
      "2 tbsp fresh coriander, very finely chopped",
      "1/2 tsp ground cumin",
      "1/2 tsp ground coriander",
      "150 g 5 oz | 1 cup plain flour",
      "150 g 5 oz | 1 cup wholewheat flour",
      "2 tbsp rapeseed oil",
    ],
    method: [
      "For the dip: Preheat the oven to 200°C (180 fan) 400°F | gas 6. Bake the sweet potato in its skin for 45 minutes.",
      "Meanwhile, purée the mango in a food processor. When the sweet potato is ready, cut it open and scoop the flesh into the food processor. Add half the lime juice and 0.25 teaspoon of salt and blend to a purée. Stir in the lime zest, chopped coriander and spices, then taste and adjust the seasoning with a little more salt or lime juice as needed.",
      "For the chapatis: Mix the plain and wholewheat flours in a bowl with 0.5 teaspoon of salt. Drizzle over the oil. then rub it in with your fingertips until it resembles fine breadcrumbs. Pour in 165 ml of water from a recently boiled kettle and bring the mixture together into a pliable dough, adding a little more water if needed",
      "Knead the dough on a lightly floured surface for 8 minutes or until smooth and elastic, then divide it into 12 balls.",
      "Set a griddle pan or frying pan over a medium heat. Roll out the first dough ball with plenty of flour into a 15 cm | 6 in circle. Lay it on the griddle and cook for 1 minute, then flip it and cook for 1 minute on the other side. Cook for 10 more seconds on each side to help the chapati puff up, then transfer to a warm plate and cover with a tea towel to keep it moist and pliable.",
      "Repeat with the rest of the 6 dough balls stacking the cooked chapatis under the cloth as you go. Serve warm with the sweet potato purée for dipping or spreading. ",
    ],
  },

  {
    id: "falafel",
    category: "lunch",
    title: "Falafel",
    diet: "vegetarian",
    description: "Cook time: 4 min . Chilling: 1hr . Difficulty: Easy . Servings: 12 . Can be frozen",
    image: "falafel.jpg",
    imageAlt: "Falafel",
    ingredients: [
      "150 g 5 oz | 1 cup dried chickpeas, soaked overnight and drained",
      "150 g 5 oz | 1 cup dried split broad (fava) beans, soaked overnight and drained",
      "4 spring onions, chopped",
      "2 cloves garlic, crushed",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp baking powder",
      "1 handful flat-leaf parsley, chopped",
      "1 handful fresh coriander, chopped",
      "75 g 21/, oz | 1/, cup semolina",
      "Vegetable oil, for deep-frying",
     ],
    method: [
      "Put the chickpeas and broad beans in a food processor with the spring onions, garlic and spices. Blitz until smooth, pausing to scrape down the sides when necessary.",
      "Sprinkle over the baking powder and add the herbs then pulse until finely chopped. Taste a little of the mixture and adjust the seasoning with salt and pepper.",
      "Chill the mixture for 1 hour.",
      "Heat the oil in a deep fat fryer, according to the manufacturer's instructions, to a temperature of 180°C | 350F.",
      "Divide the mixture into 12 balls and roll them in semolina. Deep-fry the falafel in batches for 4 minutes or until brown and very crisp.",
      "Drain on plenty of kitchen paper and serve immediately.",
    ],
  },

  {
    id: "tzatziki-dip",
    category: "lunch",
    title: "Tzatziki dip",
    diet: "vegetarian",
    description: "Prep & Cook time: 20 min . Difficulty: Easy . Servings: 2 . Cannot be frozen",
    image: "tzatziki-dip.jpg",
    imageAlt: "tzatziki dip",
    ingredients: [
      "1/2 cucumber",
      "1 tsp fine sea salt",
      "2 tbsp walnuts",
      "1 bunch fresh dill",
      "250 ml | 9 fl oz | 1 cup almond yoghurt",
      "1 tsp nigella seeds",
    ],
    method: [
      "Cut the cucumber in half lengthways and scrape out the seeds with a teaspoon.",
      "Finely chop the flesh and put it in a sieve, then sprinkle with salt and leave to drip for 15 minutes.",
      "Chop the walnuts and dill and still them both into the yoghurt with the nigella seeds and a pinch of ground black pepper.",
      "Blot the cucumber with kitchen paper, then fold it into the yoghurt dressing. Season to taste with more salt or black pepper as necessary.",
    ],
  },

  {
    id: "doner-style-kebab",
    category: "lunch",
    title: "Doner-style kebab",
    diet: "vegetarian",
    description: "Prep time: 20 min . Cook time: 30 min . Difficulty: Easy . Servings: 4 . Cannot be frozen",
    image: "doner-style-kebab.jpg",
    imageAlt: "doner style kebab",
    ingredients: [
      "100 g | 31/, oz | 1 cup wheat gluten flour (seitan)",
      "1 tsp ground cumin",
      "1 tsp ground paprika",
      "1 tbsp onion, finely grated",
      "1 clove garlic, crushed",
      "1 tsp dark soy sauce",
      "1 tbsp olive oil",
      "125 ml | 41/, fl oz | 1/ cup vegetable stock",
      "3 tbsp mayonnaise",
      "1/2 lemon, juiced",
      "1/2 clove garlic, crushed",
      "1 loaf small round seeded bread, cut into quarters",
      "1/4 iceberg lettuce, shredded",
      "1/8 red cabbage, shredded",
      "1 cucumber, peeled and thinly sliced",
      "2 medium tomatoes, sliced",

    ],
    method: [
      "For the seitan: Mix the wheat gluten flour with the cumin and paprika in a bowl.",
      "Stir the onion, garlic, soy and oil into the vegetable stock, then stir the wet mixture into the dry ingredients.",
      "Using wet hands, shape the dough into a slightly flattened log on a greased baking tray and bake for 30 minutes or until just cooked in the centre.",
      "Meanwhile, spoon the mayonnaise into a squeezy bottle with the lemon juice, garlic and 1 tsp water. Close the bottle and shake to emulsify.",
      "Cut a pocket into each piece of bread and fill with lettuce cabbage, cucumber and tomato.",
      "When the dough is cooked, cut it into thin slices and add to the kebab. Squeeze over some of the garlic dressing and serve immediately.",
    ],
  },
{
    id: "roti",
    category: "lunch",
    title: "Roti",
    diet: "vegetarian",
    description: "Prep & Cook time: 30 min . Proving time: 2hrs . Baking time: 12 min . Difficulty: Easy . Servings: 4 . Can be frozen",
    image: "roti.jpg",
    imageAlt: "roti",
    ingredients: [
      "400g |14 oz | 22/, cups strong white bread flour",
      "1/2 tsp easy blend dried yeast",
      "1 tsp caster sugar",
      "1 tsp fine sea salt",
      "4 tbsp unsweetened soya yoghurt",
      "2 tbsp olive oil, plus extra for kneading",
    ],
    method: [
      "Mix together the flour, yeast, sugar and salt. Stir the soya yoghurt and oil into 200 ml of warm water then stir it into the dry ingredients.",
      "Knead the mixture on a lightly oiled surface for 10 minutes or until smooth and elastic. Leave the dough to rest, covered with oiled clingfilm, for 1 hour or until doubled in size.",
      "Divide the dough into quarters, then roll out each piece thinly into an oval shape. Line a large baking tray with greaseproof paper and space out the ovals on top. Cover with oiled clingfilm and leave to prove for 1 hour or until doubled in size.",
      "Preheat the oven to 220°C (200*C fan) | 430 F | gas 7. Place a shallow baking tray in the oven to heat.",
      "Add a cup of water to the hot baking tray in the bottom of the oven. Transfer the tray of flatbreads to the top shelf of the oven.",
      "Bake for 12 minutes or until the breads sound hollow when tapped underneath. Transfer to a wire rack and leave to cool.",
    ],
  },
  {
    id: "tabbouleh",
    category: "lunch",
    title: "Tabbouleh",
    diet: "vegetarian",
    description: "Prep & Cook time: 10 min . Difficulty: Easy . Servings: 2 . Cannot be frozen",
    image: "tabbouleh.jpg",
    imageAlt: "tabbouleh",
    ingredients: [
      "1/2 cucumber, halved lengthways",
      "4 medium tomatoes, halved",
      "400g | 14 oz chickpeas, drained and rinsed",
      "200g | 7 oz | 1 cup cooked lentils",
      "1 bunch flat-leaf parsley, finely chopped",
      "1 tsp Dijon mustard",
      "1 tsp caster sugar",
      "1 lemon, juiced",
      "75 ml 21/, fl oz | 1/ cup olive oil",
    ],
    method: [
      "Scrape the seeds out of the cucumber and tomatoes with a teaspoon and discard. Cut the flesh of both into a small dice and transfer to a serving bowl.",
      "Toss with the chickpeas, lentils and parsley.",
      "Whisk the mustard, sugar and lemon juice together to dissolve the sugar, then season with salt and pepper. Whisk in the oil to emulsify, then dress the salad or serve in a small jug on the side.",
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
    id: "sauerkraut-and-mushroom-pierogi",
    category: "lunch",
    title: "Sauerkraut and mushroom pierogi",
    diet: "vegetarian",
    description: "Prep & Cooking time: 1hr 45 min . Resting time: 30 min . Cooking time (per batch): 4 min . Difficulty: Easy . Servings: 40 dumplings . Can be frozen",
    image: "sauerkraut.jpg",
    imageAlt: "sauerkraut",
    ingredients: [
      "500g | 18 oz | 31/, cups plain flour",
      "75g 2 1/2 oz | 2 cups dried wild mushrooms, soaked overnight in warm water",
      "2 tbsp olive oil, plus extra to dress",
      "1 onion, finely chopped",
      "2 tbsp vegeterian butter",
      "750g | 26 oz | 6 cups sauerkraut, rinsed well",
      "Fresh herbs, to garnish",
    ],
    method: [
      "To make the dough, stir 150 ml of boiling water into the flour with a pinch of salt. Turn out onto a floured work surface and knead until it forms a smooth dough. Wrap the dough in clingfilm and leave to rest at room temperature for at least 30 minutes.",
      "To make the filling, put the mushrooms and their soaking liquid in a saucepan and simmer for 10 minutes. Drain and return the liquid to the pan; set the mushrooms aside. Add the rinsed sauerkraut to the mushroom liquid and simmer for 10 minutes or until tender. Drain and leave to cool.",
      "Meanwhile, heat the oil in a frying pan and fry the onion over a medium heat for 10 minutes, stirring occasionally. Add the vegeterian butter and cook over a low heat for 5 minutes or until the onions are fragrant, soft and sweet.",
      "Chop the mushrooms and sauerkraut and stir them into the onions with a good grind of black pepper. Leave to cool.",
      "Rollout a quarter of the rested dough and cut out ten circles with an 8 cm 3 in cookie cutter. Add a heaped teaspoon of filling to the centre of each one, then fold in half and crimp closed with your fingers. Repeat with the remaining three quarters of the dough and filling, keeping the finished pierogi on a floured baking tray covered with a tea towel.",
      "Bring a very large pan of salted water to the boil. Cook the pierogi in small batches. When the dumplings start to float, time them for 2 more minutes, then scoop them from the water with a slotted spoon. Divide between warm bowls, drizzle with olive oil and garnish with fresh herbs.",
      "Open-freeze any uncooked pierogi, then store in zip lock bags in the freezer.",
    ],
  },

  {
    id: "chilli-non-carne",
    category: "mains",
    title: "Chilli non carne",
    diet: "vegetarian",
    description: "Prep time: 5 min . Cook time: 50 min . Difficulty: Easy . Servings: 6 . Can be frozen",
    image: "chilli-non-carne.jpg",
    imageAlt: "chilli-non-carne",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, finely chopped",
      "2 garlic cloves, crushed",
      "1 tbsp ground cumin",
      "1 tsp dried oregano",
      "1 1/2 tsp chipotle flakes",
      "2 tbsp tomato puree",
      "450g 16 oz | 3 cups soya mince",
      "400g | 14 oz canned tomatoes, chopped",
      "200 ml | 7 fl oz | 7/8 cup vegetable stock",
      "400g | 14 oz canned sweetcorn, drained",
      "400g 14 oz canned black beans, drained",
      "200 g 7 oz canned hominy (optional)",


    ],
    method: [
      "Heat the oil in a large saucepan and fry the onion for 10 minutes, stirring occasionally. Add the garlic and cook for 2 minutes, then add the cumin, oregano, chipotle and tomato purée. Stir over a medium heat for 3 minutes, adding a splash of water if it starts to catch on the bottom.",
      "Add the mince and fry until it starts to brown then add the chopped tomatoes, stock, sweetcorn, beans and hominy and bring to a gentle simmer.",
      "Cook the chilli for 30 minutes, stirring occasionally, until the mince is tender and the sauce has thickened. Season to taste with salt and pepper.",
      "Serve straight away, or leave to mature in the fridge for a day or two before reheating.",
    ],
  },
  {
    id: "bbq-mushroom-burgers-with-aubergine-kebabs",
    category: "mains",
    title: "BBQ Mushroom burgers with aubergine kebabs",
    diet: "vegetarian",
    description: "Prep and Cook time: 30 min . Chilling time: 1hr . Barbecuing time: 8 min . Difficulty: Easy . Servings: 4 . Cannot be frozen",
    image: "bbq-mushroom.jpg",
    imageAlt: "bbq mushroom",
    ingredients: [
      "4 tbsp olive oil",
      "2 shallots, finely chopped",
      "75g | 2 1/2 oz | 1 cup flat cap mushrooms, diced",
      "1 clove garlic, crushed",
      "1/2 tsp ground cumin",
      "1/2 tsp ground coriander",
      "400g | 14 oz canned pinto beans",
      "2 tbsp fresh chives, finely chopped",
      "2 tbsp flat-leaf parsley, finely chopped",
      "For the kebabs:",
      "2 cloves garlic, peeled",
      "1 tbsp fresh rosemary, chopped",
      "1 lemon, halved and zest finely grated",
      "3 tbsp olive oil",
      "1 large aubergine, cut into bite-sized chunks",
    ],
    method: [
      "For the burgers: Heat 2 tbsp of oil in a frying pan and fry the shallots for 5 minutes or until soft and translucent. Add the mushrooms, garlic, cumin and coriander and sauté together for 5 minutes. Season with salt and pepper.",
      "Coarsely purée the pinto beans ina food processor, then add the mushroom mix and herbs and pulse until finely chopped and evenly mixed.",
      "Chill the mixture for 1 hour. then shape into four patties. Lay them on greaseproof paper, then brush with the rest of the oil and chill again until you're ready to cook them.",
      "For the kebabs: Pound the garlic, rosemary and lemon zest with a pestle and mortar until pulped, then stir in the olive oil and a generous pinch of salt and pepper.",
      "Thread the aubergine chunks onto four metal skewers and brush them all over with the oil mixture.",
      "Cook the burgers and kebabs on a preheated barbecue for 4 minutes on each side or until golden brown all over, adding the halved lemon, cut side down halfway through. Season the burgers with a little extra salt, then squeeze the grilled lemon over the kebabs. Serve immediately.",
    ],
  },

  {
    id: "chana-masala",
    category: "mains",
    title: "Chana Masala",
    diet: "vegetarian",
    description: "Prep time: 5 min . Cook time: 40 min .  Difficulty: Easy . Servings: 4 . Can be frozen",
    image: "chana-masala.jpg",
    imageAlt: "Chana masala",
    ingredients: [
      "2 tbsp sunflower oil",
      "2 red onions, thinly sliced",
      "3cm | 1 1/4 in fresh root ginger, finely chopped",
      "3 cloves garlic, crushed",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "2 tsp garam masala",
      "1 tsp chilli powder",
      "1/2 tsp ground turmeric",
      "4 large tomatoes, diced",
      "800g | 28 oz chickpeas",
      "1 lemon, cut into wedges",
      "1 green chilli, thinly sliced",
      "1 bunch fresh coriander, chopped",



    ],
    method: [
      "Heat the oil in a sauté pan. Set aside a quarter of the onions for the garnish and add the rest to the pan. Fry over a medium heat for 5 minutes, then add the ginger and garlic and fry for another 5 minutes.",
      "Add the spices to the pan and cook for 2 minutes so that they lose their raw flavour, adding a splash of water if they start to catch on the bottom.",
      "Add the tomatoes to the pan and cook for 5 minutes or until they start to break down into a sauce.",
      "Transfer the contents of the pan to a mini food processor and blend to a paste. Scrape the paste back into the saucepan, add the chickpeas with their canning water and return the pan to the heat.",
      "Simmer the curry for 20 minutes or until the chickpeas are tender and the sauce has thickened. Season to taste with salt and a squeeze of lemon.",
      "Toss the reserved onions with the sliced chilli and coriander. Ladle the curry into warm bowls, top with the onion mixture and add a wedge of lemon to each bowl.",
    ],
  },

  {
    id: "jackfruit-biryani",
    category: "mains",
    title: "Jackfruit Biryani",
    diet: "vegetarian",
    description: "Prep time: 15 min . Cook time: 45 min . Difficulty: Easy . Servings: 6 . Cannot be frozen",
    image: "jackfruit-biryani.jpg",
    imageAlt: "jackfruit biryani",
    ingredients: [
      "500g | 18 oz | 2 1/2 cups basmati rice, soaked in cold water for 30 minutes",
      "4 tbsp vegetable ghee",
      "500g | 18 oz | 3 1/2 cups raw jackfruit, peeled, sliced and cut into wedges",
      "2 bay leaves",
      "4 cardamom pods",
      "2 black cardamom pods",
      "6 cloves",
      "1 tsp black peppercorns",
      "1 tsp fennel seeds",
      "1/2 stick cinnamon",
      "2 large onions, finely chopped",
      "5cm | 2 in fresh root ginger, grated",
      "4 cloves garlic, finely chopped",
      "250 ml | 9 fl oz | 1 cup coconut yoghurt",
      "1 tsp ground nutmeg",
      "1 tsp chilli powder",
      "1/2 tsp turmeric powder",
      "2 tsp ground coriander",
      "2 tbsp fresh mint, roughly chopped",
      "2 tbsp fresh coriander, roughly chopped",
      "1 lemon, juiced",
    ],
    method: [
      "Bring a large pan of salted water to the boil. Add the rice and cook for 8 minutes, then drain well and spread it out on a large tray to cool.",
      "Meanwhile, heat 2 tbsp of vegetable ghee in a sauté pan and brown the pieces of jackfruit all over in batches. Transfer to a plate and set aside.",
      "Add the rest of the ghee to the pan with the bay leaves, both types of cardamom, cloves, peppercorns, fennel seeds and cinnamon and cook until sizzling. Add the onions, ginger and garlic and fry for 10 minutes over a medium heat, stirring occasionally.",
      "Add the coconut yoghurt and cook until it starts to split, then stir in the nutmeg, chilli powder, turmeric and coriander. Cook for 2 more minutes, then stir in the coriander, mint and jackfruit. Season to taste with salt and set aside.",
      "Spoon half of the rice into a round cast iron casserole dish or claypot. Spoon over the jackfruit curry, then top with the rest of the rice and drizzle over the lemon juice. Cover tightly with foil, then put on the lid so that none of the steam can escapе.",
      "Cook over a very low heat for 20 minutes, then shake the pot to mix the jackfruit into the rice without breaking the grains. Serve immediately.",

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
