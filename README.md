# Mack API
### Backend

Mack is a manga tracking react app that was built with the idea of keeping track of 
reading materials from multiple websites all in one convenient place. While the 
idea started out with manga this could also be utilized for light novels, comics, 
web toons, and many other forms of media that are consumed from multiple websites.

Users can sign up, sign in, change their password, and sign out. On sign in a user
can check out all of their current stories or add a new story that they just started
reading. Users can also update various information regarding their stories such as the
current chapter or they can also delete a story if they are no longer reading it.

### Setup and local installation
1. Clone repo
2. `npm install` for dependencies
3. Use links below for client repo, clone and install 
4. `nodemon serve` to run localhost

#### Deployed Frontend App:
https://d-raimon.github.io/mack-client/#/

#### Frontend Repo:
https://github.com/D-Raimon/mack-client

#### Deployed Backend:
https://guarded-anchorage-66706.herokuapp.com/

#### Backend Repo:
https://github.com/D-Raimon/mack-api

#### Technologies Used:
- React
- Node/Express
- JavaScript
- HTML
- CSS
- Bootstrap
- mongoDB
- Mongoose

#### Routes
<table style="display:inline">
<th colspan="2" style="text-align:center">Books</th>
<th colspan="2" style="text-align:center">User</th>
<tr>
<td>GET</td>
<td>/books</td>
<td>POST</td>
<td>/sign-up</td>
</tr>
<tr>
<td>GET</td>
<td>/books/:id</td>
<td>POST</td>
<td>/sign-in</td>
</tr>
<tr>
<td>POST</td>
<td>/books</td>
<td>PATCH</td>
<td>/change-password</td>
</tr>
<tr>
<td>PATCH</td>
<td>/books/:id</td>
<td>DELETE</td>
<td>/sign-out</td>
</tr>
<tr>
<td>DELETE</td>
<td>/books/:id</td>
<td></td>
<td></td>
</tr>

</table>

#### User Stories
- As a user I want to sign-up / sign-in
- As a user I want to change my password
- As a user I want to be able to sign-out
- As a user I want to be able to add a book that I'm reading
- As a user I want to be able to search for all of my books
- As a user I want to delete books I'm no longer reading
- As a user I want to update a books info, such as current chapter
