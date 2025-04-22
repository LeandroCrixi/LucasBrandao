const currentYear = () => {
    const year = new Date().getFullYear();
    const current_year = document.getElementById('current-year')
    current_year.textContent = year
}

export { currentYear }