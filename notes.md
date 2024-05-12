### We Need A PLAN !

1. Add the header component
2. Add the Meals-related components and the logic to fetch meals data from a backend
3. Add Cart Login (Add items to cart, edit cart items) & checkout page logic

##### 1. Planning the App and Adding a First Component

##### 2. Fetching Meals Data (GET HTTP Request)

##### 3. Add a `MealItem` Component

##### 4. Formatting & Outputting Numbers as Currency

- [NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

#### 5. Context

- We wanna define a Context Provider Component.
- Which then can be wrapped around our components, to make this context available to them. e.g CartContext...
- and which will do the actual data management, and the actual state management, because the context feature on its own standalone, without anything else is not about managing any state.
- Its not about changing any values and triggering any component updates.
- **Instead its just about spreading data to COMPONENTS.**
- But ofcourse that data that is being spread can be stateful and therefore it is this CartContextProvider COMPONENT that should manage that changing data.

- Baically in this CartContextProvider() we wanna manage some state and eventually I wanna return my `CartContext.Provider` Component.
- So this Context e.g `CartContext` that is created with `createContext` in the end is an object that has a provider property, and that `Provider` property then is a component.
- That can be outpit and that should be wrapped around any component that need access to this context.
- Now here my idea is to wrap my custom component around those component and therefore here we should accept the children prop, and oass that as a value between `CartContext.Provider`
