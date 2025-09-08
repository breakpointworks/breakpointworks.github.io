
// Theme toggle and state
(function() {
   emailjs.init('glp_yIE8fz5GZDhm1');
   
  function handleSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('#leadForm');
    const name = form.querySelector('[name="user_name"]').value;
    const email = form.querySelector('[name="user_email"]').value;
    const phone = form.querySelector('[name="user_phone"]').value;
    const service = form.querySelector('[name="service"]').value;
    const summary = form.querySelector('[name="project_summary"]').value;
    const budget = form.querySelector('[name="budget"]').value;
    const company = form.querySelector('[name="company"]').value;

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    emailjs.send("service_clnb7rr","template_sdrs2yf",{
            title: service,
            name: name,
            user_name: name,
            user_email: email,
            user_phone: phone,
            service: service,
            project_summary: summary,
            company: company,
            budget: budget,
        }, 'glp_yIE8fz5GZDhm1');

    // Show success message
    document.getElementById("formSuccess").classList.remove("d-none");
    form.reset();
    form.classList.remove('was-validated');
  }
  // lazy image reveal
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    imgs.forEach(img=>{ if(img.complete) img.classList.add('loaded'); else img.onload=()=>img.classList.add('loaded'); });
    // nav active
    // const path = location.pathname.split('/').pop() || 'index.html';
    // document.querySelectorAll('.nav-link').forEach(a=>{ if(a.getAttribute('href') && a.getAttribute('href').endsWith(path)) a.classList.add('active'); });
})();
