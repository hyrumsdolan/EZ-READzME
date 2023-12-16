const generateMarkdown = require('../generateMarkdown');

describe('generateMarkdown', () => {
    // Test data for generating README
    const data = {
        title: 'Test Project',
        description: 'A test project',
        installation: 'npm install',
        usage: 'npm start',
        contributing: 'Contributions welcome',
        tests: 'npm test',
        license: 'MIT',
        github: 'username',
        email: 'user@example.com'
    };

    // Testing if the generated markdown contains the correct title
    test('contains the correct title', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`# ${data.title}`);
    });

    // Testing if the generated markdown contains the correct description
    test('contains the correct description', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`## Description\n${data.description}`);
    });

    // Testing if the generated markdown contains the correct installation instructions
    test('contains correct installation instructions', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`## Installation\n${data.installation}`);
    });

    // Testing if the generated markdown contains the correct usage information
    test('contains correct usage information', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`## Usage\n${data.usage}`);
    });

    // Testing if the generated markdown contains the correct contribution guidelines
    test('contains correct contribution guidelines', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`## Contributing\n${data.contributing}`);
    });

    // Testing if the generated markdown contains the correct test instructions
    test('contains correct test instructions', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`## Tests\n${data.tests}`);
    });

    // Testing if the generated markdown contains the correct license section
    test('contains correct license section', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`## License\n![License]`);
        expect(markdown).toContain(`This project is licensed under the ${data.license} license.`);
    });

    // Testing if the generated markdown contains the correct GitHub link
    test('contains correct GitHub link', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`- GitHub: [${data.github}](https://github.com/${data.github})`);
    });

    // Testing if the generated markdown contains the correct email
    test('contains correct email', () => {
        const markdown = generateMarkdown(data);
        expect(markdown).toContain(`- Email: ${data.email}`);
    });
});
