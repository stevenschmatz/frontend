var NewsletterForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var name = React.findDOMNode(this.refs.name).value.trim();
        var email = React.findDOMNode(this.refs.email).value.trim();
        if (!name || !email) {
            return;
        }
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: {
                name: name,
                email: email
            },
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" ref="name"/>
                <input type="email" name="email" placeholder="Email" ref="email"/>
                <input type="submit" value="Subscribe"/>
            </form>
        );
    }
})

React.render(
    <NewsletterForm url="https://api.optimizemi.org/newsletter"/>,
    document.getElementById('contact')
);
