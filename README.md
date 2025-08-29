# JavaScript DOM & Event Questions

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **`getElementById`**  
  - এটি একটি নির্দিষ্ট ID সহ element return করে।  
  - সবসময় **single element** return করে।  
  - Example:  
    ```javascript
    const header = document.getElementById('main-header');
    ```

- **`getElementsByClassName`**  
  - এটি একটি class নাম দিয়ে সব matching element return করে।  
  - এটি **HTMLCollection** return করে।  
  - Example:  
    ```javascript
    const items = document.getElementsByClassName('list-item');
    ```

- **`querySelector` / `querySelectorAll`**  
  - `querySelector`: CSS selector দিয়ে **প্রথম matching element** return করে।  
  - `querySelectorAll`: CSS selector দিয়ে **সব matching element** return করে (NodeList)।  
  - Example:  
    ```javascript
    const firstItem = document.querySelector('.list-item');
    const allItems = document.querySelectorAll('.list-item');
    ```

---

## 2. How to create and insert a new element into the DOM

- নতুন element তৈরি করতে `document.createElement()` ব্যবহার করা হয়।  
- Text বা HTML content যোগ করতে `textContent` বা `innerHTML` ব্যবহার করা হয়।  
- DOM এ add করতে `appendChild` বা `insertBefore` ব্যবহার করা হয়।  

Example:
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
document.body.appendChild(newDiv);
 ```


---

## 3. Event Bubbling and how it works

- Event Bubbling হলো একটি event child element থেকে parent element পর্যন্ত propagate হওয়া।
- Example:
 ```javascript
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
 ```

---

## 4. Event Delegation and why it is useful

- Event Delegation মানে parent element এ event listener attach করা, যা automatically সব child element handle করতে পারে।
- এটি বড় list বা dynamic elements এর জন্য খুবই useful, কারণ প্রতিটি element এ আলাদা listener লাগানোর দরকার নেই।
- Example:
 ```javascript
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});
 ```

---

## 5. Difference between preventDefault() and stopPropagation()
- preventDefault()
- এটি element এর default behavior block করে।
 - Example:
 ```javascript
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
});
 ```
- stopPropagation()
- এটি event bubbling বা capturing বন্ধ করে।
   - Example:
 ```javascript
child.addEventListener('click', (e) => {
  e.stopPropagation();
});
 ```
