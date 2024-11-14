const { User, Post, Plugin, Page } = require('./models'); // Adjust the path if necessary

async function seedDatabase() {
    try {
        // Creating Users
        const adminUser = await User.create({
            username: 'admin',
            email: 'admin@example.com',
            password: 'admin123',
        });

        const editorUser = await User.create({
            username: 'editor',
            email: 'editor@example.com',
            password: 'editor123',
        });

        // Creating Posts
        const post1 = await Post.create({
            title: 'First Post',
            content: 'This is the content of the first post.',
        });

        const post2 = await Post.create({
            title: 'Second Post',
            content: 'This is the content of the second post.',
        });

        // Creating Plugins
        const plugin1 = await Plugin.create({
            name: 'Image Slider',
            active: true,
        });

        const plugin2 = await Plugin.create({
            name: 'Video Embed',
            active: false,
        });

        // Creating Pages
        const aboutPage = await Page.create({
            name: 'About Us',
            content: 'This is the content of the About Us page.',
        });

        const contactPage = await Page.create({
            name: 'Contact Us',
            content: 'This is the content of the Contact Us page.',
        });

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seedDatabase();
