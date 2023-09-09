/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "dracula",
      {
        'custom-light': {
          'primary' : '#66cc8a',
          'primary-focus' : '#41be6d',
          'primary-content' : '#f9fafb',

          'secondary' : '#333c4d',
          'secondary-focus' : '#055bfa',
          'secondary-content' : '#f9fafb',

          'accent' : '#ea5234',
          'accent-focus' : '#d03516',
          'accent-content' : '#f9fafb',

          'neutral' : '#333c4d',
          'neutral-focus' : '#f5f5f5',
          'neutral-content' : '#f9fafb',

          'base-100' : '#d7e1ee',
          'base-200' : '#f9fafb',
          'base-300' : '#f0f0f0',
          'base-content' : '#2a2e37',

          'info' : '#1c92f2',
          'success' : '#01b741',
          'warning' : '#d03516',
          'error' : '#ff5724',

         '--rounded-box': '1rem',          
         '--rounded-btn': '.5rem',        
         '--rounded-badge': '1.9rem',      

         '--animation-btn': '0',       
         '--animation-input': '0',       

         '--btn-text-case': 'uppercase',   
         '--navbar-padding': '.5rem',      
         '--border-btn': '1px',            
       },
     },
    ],
  },
  plugins: [require("daisyui")],
};
