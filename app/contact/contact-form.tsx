import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LeafIcon } from 'lucide-react'

export default function Component() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log('Form submitted:', formState)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-6">
                <LeafIcon className="h-8 w-8 text-green-500 mr-2" />
                <h1 className="text-2xl font-bold text-gray-800">Carbon Vantage</h1>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
                Learn more about CBAM in Europe and carbon tax
            </p>
            {isSubmitted ? (
                <div className="text-center text-green-600">
                    Thank you for your interest! We'll get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            className="min-h-[100px]"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                        Send Message
                    </Button>
                </form>
            )}
        </div>
    )
}