# Objective:

To build a severless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calender API to fetch upcoming events.

\*\* Features:
-Filter events by city.
-Show/hide event details.
-Specify number of events.
-Use the app when offline.
-Add an app Shortcut to the home screen.
-View a chart showing the number of upcoming events by city.

\*\* User Stories:

- As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

- As a user, I should be able to show or Hide event details so that I can see more details and hide the details of events when i want.

- As a user, I should be able to specify the number of events that I want to see or attend so that I can either see more or less number of events in the event list.

- As a user, I should be able to use the APP when offline so that i can still access the application even without being online.

- As a user, I should be able to Visualize the data so that i can see a chart with the number of upcoming events in each city.

# Scenarios for User stories:

## Filter events by city

\*\* Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

\*\* Scenario 2: User should see a list of suggestions when they search for a city.

Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they’ve typed

\*\* Scenario 3: User can select a city from the suggested list.

Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

## SHOW/HIDE AN EVENT'S DETAILS:

\*\*Scenario 1: An event element is collapsed by default
Given that a user has not selected a city, When the list of event is displayed, Then all events details should be hidden.

\*\* Scenario 2: User can expand an event to see its details
Given that a user has selected an event, When the user clicks on the event show details button, Then the event details should be displayed.

\*\* Scenario 3: User can collapse an event to hide its details
Given that a user has finished viewing a selected event, When the user clicks on the hide details button, Then the event details should be hidden.

## SPECIFY NUMBER OF EVENTS

\*\* Scenario 1: When user hasn't specified a number, 32 is the default number
Given that a user has not specified a number of events, When selecting cities, Then the default number of displayed events should be 32.

\*\* Scenario 2: User can change the number of events they want to see
Given that the user does not want to view all events, When selecting cities, Then the User should be able to change the number of events they want to see.

## USE THE APP WHEN OFFLINE

\*\* Scenario 1: Show cached data when there's no internet connection
Given that the user has no internet connection, When using the application, Then the user should still be able to view cached data

\*\* Scenario 2: Show error when user changes the settings (city, time range)
Given that a user changed the settings (city, time range), When using the application, Then an error message should be displayed.

## DATA VISUALIZATION

\*\* Scenario 1: Show a chart with the number of upcoming events in each city.
Given that a user selects a city, When the user is viewing events, Then a data visualization chart should be displayed
