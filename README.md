# Next.js i18n with next-intl

This project is a multilingual web application developed using the Next.js App Directory structure. It implements i18n (internationalization) support using the next-intl package.

## Features

- Next.js 13+ App Directory structure
- Multilingual support with next-intl
- Localized pathnames
- Static rendering

## Getting Started

Follow these steps to run the project on your local machine:

1. Clone the repository:

   ```
   git clone [REPO_URL]
   ```

2. Navigate to the project directory:

   ```
   cd [PROJECT_NAME]
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Multilingual Support

This project provides multilingual support using the next-intl package. Language files are located in the `messages` directory.

## Localized Pathnames

The project uses localized URL paths for different languages. For example:

- `/en/about` (English)
- `/tr/hakkimizda` (Turkish)

## Static Rendering

Static rendering is used to improve performance and enhance SEO. This ensures pages are generated at build time and served quickly.

## Contributing

1. Fork this repository
2. Create a new feature branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -am 'Add new feature: XYZ'`)
4. Push to the branch (`git push origin new-feature`)
5. Create a new Pull Request
