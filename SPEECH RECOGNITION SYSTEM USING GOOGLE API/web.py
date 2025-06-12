from flask import Flask, render_template, request
apply = Flask(__name__)


@apply.route("/transcript")
def home():
    return render_template("speech.html")


if __name__ == "__main__":
    apply.run(debug=True, port=5556)