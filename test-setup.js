const axios = require('axios');

async function testSetup() {
  console.log('Testing Cognix AI Website Setup...\n');

  try {
    // Test backend health
    console.log('1. Testing Backend Health...');
    const healthResponse = await axios.get('http://localhost:5000/api/health');
    console.log('✅ Backend is running:', healthResponse.data.message);
  } catch (error) {
    console.log('❌ Backend health check failed:', error.message);
  }

  try {
    // Test testimonials endpoint
    console.log('\n2. Testing Testimonials API...');
    const testimonialsResponse = await axios.get('http://localhost:5000/api/testimonials');
    console.log('✅ Testimonials API working, found', testimonialsResponse.data.length, 'testimonials');
  } catch (error) {
    console.log('❌ Testimonials API failed:', error.message);
  }

  try {
    // Test projects endpoint
    console.log('\n3. Testing Projects API...');
    const projectsResponse = await axios.get('http://localhost:5000/api/projects');
    console.log('✅ Projects API working, found', projectsResponse.data.length, 'projects');
  } catch (error) {
    console.log('❌ Projects API failed:', error.message);
  }

  try {
    // Test blog endpoint
    console.log('\n4. Testing Blog API...');
    const blogResponse = await axios.get('http://localhost:5000/api/blog');
    console.log('✅ Blog API working, found', blogResponse.data.length, 'blog posts');
  } catch (error) {
    console.log('❌ Blog API failed:', error.message);
  }

  console.log('\n🎉 Setup test completed!');
  console.log('\nNext steps:');
  console.log('1. Backend is running on http://localhost:5000');
  console.log('2. Frontend should be running on http://localhost:3000');
  console.log('3. Open http://localhost:3000 in your browser to view the website');
}

testSetup();