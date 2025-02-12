# Kramster!
See it live here: [kramster.it](https://kramster.it)

Kramster is a quiz app for making exam preparation more fun. It works for all exams having multiple choice questions.

## API
The API has four parts: __Exams__, __Reports__, __Stats__, __List__.
You can use the Exams part to get access to all the questions Kramster has to offer, and their answers.
The Reports part is for getting the reports generated when a person has finished an exam.
Use this for detailed analysis of how well the Kramster users do.
The Stats part is for getting some standard accumulated statistics based on the reports.
The List part is for getting a string array of names of schools, courses or exams.

Please see the [API Reference](https://github.com/draperunner/Kramster/wiki/API-Reference) for details on the API.

## Contributing to Data
To add an exam to Kramster, the easiest is to just email me the PDF (matsbyr@gmail.com).

If you want help out with the exam processing, or learn how to add exams to your Kramster clone,
check out the Kramster Data repository (https://github.com/draperunner/kramster-data).

## Installation instructions

To setup Kramster on your machine, you will first need to install Node.js and MongoDB.

Then, install dependencies from npm:

```
npm install
```

Follow the instructions for setting up the [backend server](https://github.com/draperunner/kramster-api)

After that's all done, you can run this app with

```
npm start
```

This will run the development server on `http://localhost:8080`. Make sure your `API_BASE_URL` variable in `.env.dev` matches the address the backend server runs on.
