import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    $('body').append('<div id="logo"></div>');
    
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<div class="button-container">');
    $('body').append('<button id="clickBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('</div>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#clickBtn').on('click', debounce(updateCounter, 500));
});
