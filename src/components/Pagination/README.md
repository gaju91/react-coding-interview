# 📌 Pagination Component  

A **Pagination** component is used to split large datasets into smaller chunks, improving performance and user experience. This component implements **lazy loading** with **infinite scrolling**, meaning new data loads automatically as the user scrolls down.  

---

## 🎯 **Key Features**  

✅ Fetches data **dynamically** when the user scrolls down.  
✅ Uses **Intersection Observer** to detect when to load more data.  
✅ Supports **loading indicators** for better UX.  
✅ Prevents **unnecessary API calls** using **debouncing & state checks**.  
✅ Stops loading when **all data is fetched**.  

---

## 🖼️ **Example UI Structure**  

```
+----------------------------------+
|   Item 1                        |
|   Item 2                        |
|   Item 3                        |
|   ...                            |
+----------------------------------+
|        Loading more items... ⏳  |  <-- Loading Indicator
+----------------------------------+
```

---

## 🔧 **Implementation Steps**  

1️⃣ **Create a Pagination Component** using `React`.  
2️⃣ Manage **state (`useReducer`)** to handle items, loading, and errors.  
3️⃣ Use **API Fetching** to retrieve paginated data.  
4️⃣ Implement **Intersection Observer** to trigger lazy loading.  
5️⃣ Prevent **excessive API calls** using **debounce & state checks**.  
6️⃣ **Stop loading** when all data is fetched.  

---

## 📖 **Documentation**  

For more details, refer to the **main repository README**:  
[🔗 Back to Main README](../../../README.md)  