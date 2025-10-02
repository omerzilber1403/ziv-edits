# 🚀 התקנת Git והעלאה ל-GitHub

## ⚠️ Git לא מותקן במחשב שלך

אבל זה פשוט לתקן! הנה המדריך המלא:

---

## שלב 1️⃣: התקנת Git

### הורדה והתקנה:
1. **לחץ כאן להורדה:** https://git-scm.com/download/win
2. הפעל את הקובץ שהורדת
3. **לחץ Next בכל החלונות** (ברירות המחדל מעולות)
4. סיימת? **סגור את PowerShell ופתח חלון חדש** (חשוב!)

---

## שלב 2️⃣: הרצת הסקריפט האוטומטי

### אחרי שהתקנת Git:

1. **פתח PowerShell חדש** (חובה!)

2. **נווט לתיקיית הפרויקט:**
   ```powershell
   cd "C:\Users\omerz\OneDrive\Documents\Projects\Z-I-V"
   ```

3. **הרץ את הסקריפט:**
   ```powershell
   .\upload-to-github.ps1
   ```

4. **אם מקבל שגיאת הרשאות:**
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   .\upload-to-github.ps1
   ```

---

## 🎯 מה הסקריפט עושה?

הסקריפט `upload-to-github.ps1` יעשה **אוטומטית**:
- ✅ אתחול Git בתיקיית ה-build
- ✅ הוספת כל הקבצים
- ✅ יצירת commit ראשון
- ✅ חיבור ל-GitHub שלך
- ✅ העלאה ל: https://github.com/omerzilber1403/ziv-edits

---

## 🔐 אימות ב-GitHub

כשהסקריפט מנסה להעלות, GitHub יבקש ממך להתחבר:

### אופציה 1: GitHub Desktop (מומלץ!)
1. הורד: https://desktop.github.com/
2. התקן והתחבר
3. הרץ את הסקריפט שוב

### אופציה 2: Personal Access Token
1. לך ל: https://github.com/settings/tokens
2. **Generate new token (classic)**
3. תן לו שם: `ziv-portfolio`
4. סמן: ✅ `repo` (כל ההרשאות)
5. **Generate token** ושמור אותו
6. כשהסקריפט שואל סיסמה - הדבק את ה-Token

---

## 🚀 אחרי ההעלאה

### Repository שלך:
https://github.com/omerzilber1403/ziv-edits

### חיבור ל-Netlify:
1. לך ל: https://app.netlify.com/
2. **Add new site** → **Import from GitHub**
3. בחר: **ziv-edits**
4. השאר הגדרות ריקות
5. **Deploy!**

---

## ❓ שאלות נפוצות

### "git is not recognized"
→ פתח PowerShell **חדש** אחרי ההתקנה

### "execution policy error"
→ הרץ:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### "authentication failed"
→ השתמש ב-GitHub Desktop או Personal Access Token

### "repository already exists"
→ זה בסדר! הסקריפט יעדכן את הקבצים

---

## 🎉 מוכן?

1. **התקן Git:** https://git-scm.com/download/win
2. **פתח PowerShell חדש**
3. **הרץ:**
   ```powershell
   cd "C:\Users\omerz\OneDrive\Documents\Projects\Z-I-V"
   .\upload-to-github.ps1
   ```

**זהו! תוך דקה האתר יהיה ב-GitHub!** 🚀

