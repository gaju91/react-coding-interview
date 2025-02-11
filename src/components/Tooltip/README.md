# 📌 Tooltip Component  

A **Tooltip** is a small popup that appears when a user hovers over or focuses on an element. It provides additional context or information without cluttering the UI.  

## 🎯 Key Features  
✅ **Appears on hover or focus** (Keyboard accessible).  
✅ **Custom positioning** → Supports `top`, `bottom`, `left`, `right`.  
✅ **Smooth fade-in/fade-out animations**.  
✅ **Matches the design** of Accordion, Tabs, and Modal components.  

## 🖼️ Example UI Structure  
```
+-------------------+
|     Hover Me      |  <-- Trigger element
+-------------------+
       Tooltip (appears on hover)
```

### Tooltip Positioning:  
```
Top:    ↑ Tooltip ↑
Bottom: ↓ Tooltip ↓
Left:   ← Tooltip 
Right:  Tooltip →
```

## 🔧 Implementation Steps  
1️⃣ Create a `Tooltip` component.  
2️⃣ Accept **text** (tooltip content) and **position** (`top`, `bottom`, `left`, `right`) as props.  
3️⃣ Use **state (`useState`)** to track tooltip visibility.  
4️⃣ Show tooltip on **hover (`onMouseEnter`)** and **focus (`onFocus`)**.  
5️⃣ Add **smooth transitions and styling** to match our previous components.  

## 📖 Documentation  
For more details, refer to the **main repository README**:  
[🔗 Back to Main README](../../../README.md)  
