# Senior Result App

Senior Result App is a React web application for generating printable senior secondary school result sheets from Continuous Assessment data files.

The app accepts .xlsx and .csv uploads, extracts student scores, and renders an individual report page per student.

## Features

- Upload CA sheet in .xlsx or .csv format
- Parse student records from a fixed school template
- Open a dedicated result view for each student
- Configure grade boundaries (Outstanding, Excellent, Very Good, Good, Fair)
- Automatically compute display labels for:
  - Subject grade
  - Pass/Fail remark
  - Overall performance band
- Client-side routing for student pages (React Router)
- Ready for Firebase Hosting deployment

## Tech Stack

- React 17
- Create React App
- React Router DOM v5
- read-excel-file (XLSX parsing)
- Papa Parse (CSV parsing)
- Firebase Hosting

## Project Structure

```text
.
├── public/
├── src/
│   ├── App.js
│   ├── ButtonList.js
│   ├── ResultDisplay.js
│   └── ...
├── firebase.json
└── package.json
```

## Prerequisites

- Node.js 16+ (or current LTS)
- npm
- Optional for deployment: Firebase CLI

## Getting Started

1. Install dependencies:

  ```bash
  npm install
  ```

2. Start development server:

  ```bash
  npm start
  ```

3. Open in browser:

  ```text
  http://localhost:3000
  ```

## Usage

1. Open the app.
2. Upload a CA sheet (.xlsx or .csv).
3. (Optional) Click Show Grade Settings and adjust score thresholds.
4. Click Generate result Data.
5. Click a student name to open that student’s report page.

## Input File Expectations (Important)

The parser expects a specific sheet structure:

- Header row is expected on row index 1 (second row in spreadsheet).
- Student records begin from row index 3 (fourth row).
- Student rows stop when the second column (student name field) is empty.
- First columns should include:
  - S/N
  - NAME
- Each subject is expected in 3 columns:
  - C.A
  - Exam
  - Total
- Tail columns may include:
  - TOTAL
  - AVERAGE
  - REMARK
  - POSITION

This project currently renders a fixed-size report table and is optimized for the existing school template (up to 18 subject rows displayed).

## Grade Settings

Default thresholds:

- Pass mark: 50
- Outstanding: 90+
- Excellent: 80+
- Very Good: 70+
- Good: 60+
- Fair: 50+
- Below Fair: Poor

These can be changed from the UI before generating student pages.

## Available Scripts

- npm start — run app in development mode
- npm test — run tests
- npm run build — create production build in build/
- npm run eject — eject CRA configuration (irreversible)

## Build for Production

```bash
npm run build
```

The production output is created in the build/ folder.

## Deploy to Firebase Hosting

1. Install Firebase CLI (if needed):

  ```bash
  npm install -g firebase-tools
  ```

2. Log in:

  ```bash
  firebase login
  ```

3. Build the app:

  ```bash
  npm run build
  ```

4. Deploy hosting:

  ```bash
  firebase deploy --only hosting
  ```

The firebase.json is already configured to:

- serve from build/
- rewrite all routes to /index.html (supports React Router pages)

## Known Limitations

- Report layout is highly template-specific.
- Subject rows are currently hard-coded in the result display.
- Invalid or differently structured files may parse incorrectly.

## Future Improvements

- Dynamically render any number of subjects
- Better validation with user-friendly upload errors
- Template import guide/sample file
- Export to PDF/print improvements

## License

No license file is currently defined in this repository.

