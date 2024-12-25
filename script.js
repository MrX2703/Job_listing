async function fetchJobs() {
  try {
    const response = await fetch('/.netlify/functions/getJobs');
    const jobs = await response.json();

    const jobList = document.getElementById('jobList');
    jobList.innerHTML = ''; // Clear the loading text

    jobs.forEach(job => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${job.title}</strong><br>
        Location: ${job.location}<br>
        <a href="${job.link}" target="_blank">View Job</a>
      `;
      jobList.appendChild(li);
    });
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    document.getElementById('jobList').innerHTML = '<li>Failed to load jobs. Please try again later.</li>';
  }
}

window.onload = fetchJobs;
