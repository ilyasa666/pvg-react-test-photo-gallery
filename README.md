# React Photo Gallery

React Photo Gallery is a web application that displays a gallery of photos fetched from the Unsplash API. It provides features like infinite scrolling and search

## Features

- Fetches and displays photos from the Unsplash API.
- Implements infinite scrolling to load more photos as the user scrolls.
- Provides a search bar to search for specific photos.
- Allows users to share photos on social media platforms.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Framer Motion: Animation library for creating smooth and interactive animations.
- React Lazy Load Image: Component for lazy-loading images to improve performance.
- Material-UI: UI component library for React.
- Axios: Promise-based HTTP client for making API requests.

## Installation

1. Clone the repository:
   `git clone https://github.com/your-username/react-photo-gallery.git`
2. Install the dependencies:
   `yarn install`
3. Obtain an Unsplash Access Key:

- Visit the Unsplash Developers page.
- Sign in or create a new account.
- Create a new application to generate an access key.

4. Update the Access Key:

- Open the `src/services/api/index.ts` file.
- Replace `$token` with your actual Unsplash access key.

5. Start the application:
   `yarn start`
6. Open your browser and visit (http://localhost:3000) to see the app.

7. Open `src/components` to modoify the components

## Usage

- The app will initially display a grid of photos fetched from the Unsplash API.
- Scroll down to load more photos through infinite scrolling.
- Use the search bar to search for specific photos.
- Click on a photo to view detail photo

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

## License

Make sure to update the installation steps and add any additional details or customizations based on your specific application.

Feel free to modify the content and structure of the `README.md` file to suit your needs.
