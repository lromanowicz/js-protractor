Feature: Example Feature

	Scenario: Send a message to user
		Given user opens "Contact" page
		 When user sends a message to "Tom Baggins" using "tbaggins@testmail.com" email
		 Then the message should be sent successfully