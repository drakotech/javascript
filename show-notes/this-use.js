// How to Use the 'this' Keyword in JavaScript Programs


var guide = {
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function (viewingUserRole) {
      if (viewingUserRole === 'paid') {
        return true;
      }
    },
    renderContent: function(userRole) {
      if (this.visibleToUser(userRole)) {
        console.log(this.title + " - " + this.content);
      } else {
        this.content = '';
        console.log(this.title + " - " + this.content);
      }
    }
  }
  
  user = { role: 'paid' };
  guide.renderContent(user.role);
  // Guide to Programming - Content goes here...