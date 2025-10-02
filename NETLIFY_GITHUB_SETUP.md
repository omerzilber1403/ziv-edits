# 🚀 הגדרת Netlify עם GitHub

## שלב 1: התקנת Git (אם עדיין לא מותקן)
1. הורד Git מ: https://git-scm.com/download/win
2. התקן עם ברירות המחדל
3. פתח מחדש את הטרמינל

## שלב 2: יצירת Repository ב-GitHub
1. לך ל: https://github.com/new
2. שם הפרויקט: `ziv-portfolio`
3. תיאור: `Z-I-V Video Editor Portfolio - Next.js`
4. בחר: **Public** (או Private אם אתה רוצה)
5. **אל תבחר** ב-"Add README" או ".gitignore" (כבר יש לנו)
6. לחץ **Create repository**

## שלב 3: העלאת הקוד ל-GitHub

פתח PowerShell בתיקיית הפרויקט והרץ:

```powershell
# אתחול Git
git init

# הוספת כל הקבצים
git add .

# Commit ראשון
git commit -m "Initial commit - Z-I-V Portfolio"

# קישור ל-GitHub (החלף YOUR_USERNAME בשם המשתמש שלך)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ziv-portfolio.git

# העלאה ל-GitHub
git push -u origin main
```

## שלב 4: חיבור Netlify ל-GitHub

1. לך ל: https://app.netlify.com/
2. לחץ **"Add new site"** → **"Import an existing project"**
3. בחר **"Deploy with GitHub"**
4. אשר את הגישה ל-GitHub
5. בחר את הפרויקט **ziv-portfolio**
6. הגדרות Build:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - לחץ **"Deploy site"**

## ✅ זהו! האתר יעלה אוטומטית

### מה קורה עכשיו?
- כל פעם שתעשה `git push` ל-GitHub, Netlify יבנה את האתר מחדש אוטומטית
- תקבל URL ייחודי (ותוכל לשנות אותו בהגדרות)
- תוכל לקשר דומיין משלך בהגדרות Netlify

### פקודות Git שימושיות:

```powershell
# עדכון האתר (אחרי שינויים)
git add .
git commit -m "תיאור השינוי"
git push

# בדיקת סטטוס
git status

# היסטוריית שינויים
git log --oneline
```

## 🎯 הגדרות נוספות ב-Netlify (אופציונלי)

1. **שינוי שם האתר**:
   - Site settings → Site details → Change site name
   
2. **דומיין מותאם**:
   - Domain management → Add custom domain
   
3. **HTTPS**:
   - מופעל אוטומטית!

---

## ⚠️ אם Git לא מותקן:
1. הורד Git: https://git-scm.com/download/win
2. התקן
3. **פתח PowerShell חדש** (חשוב!)
4. חזור לשלב 3

---

**צריך עזרה?** הרץ בטרמינל:
```powershell
git --version
```
אם זה עובד - Git מותקן ומוכן לשימוש! ✅

