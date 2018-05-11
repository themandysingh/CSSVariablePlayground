"use strict";
(function() {
    window.onload = function() {
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.addEventListener('change', handleChange));
        inputs.forEach(input => input.addEventListener('mousemove', handleChange))
    };

    function handleChange() {
        const SIZING = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + SIZING);
    }
})();