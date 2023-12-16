const fs = require('fs');
const { init } = require('../index');

jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValue({
        title: 'Test Project',
        description: 'A test project description',
        installation: 'Installation instructions',
        usage: 'Usage information',
        contributing: 'Contribution guidelines',
        tests: 'Test instructions',
        license: 'MIT',
        github: 'userGitHub',
        email: 'user@example.com'
    })
}));
jest.mock('fs');

describe('index.js functionality', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should write README file with correct content when user provides input', async () => {
        fs.writeFile.mockImplementation((fileName, data, callback) => {
            callback(null);
        });

        await init();

        expect(fs.writeFile).toHaveBeenCalled();
        expect(fs.writeFile.mock.calls[0][0]).toBe('README.md');
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/## Description\nA test project description/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/## Installation\nInstallation instructions/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/## Usage\nUsage information/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/## Contributing\nContribution guidelines/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/## Tests\nTest instructions/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/## License\n\!\[License\]/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/This project is licensed under the MIT license\./);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/- GitHub: \[userGitHub\]\(https:\/\/github\.com\/userGitHub\)/);
        expect(fs.writeFile.mock.calls[0][1]).toMatch(/- Email: user@example.com/);
    });
});
