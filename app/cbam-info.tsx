import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeafIcon, BarChart2Icon, ClipboardCheckIcon, TrendingUpIcon } from 'lucide-react'

export default function CBAMInfo() {
    return (
        <>
            <div>
                <title>CBAM Optimization Services | Carbon Vantage</title>
                <meta name="description" content="Learn about the Carbon Border Adjustment Mechanism (CBAM) and how Carbon Vantage can help optimize your compliance strategy." />
                <meta property="og:title" content="CBAM Optimization Services | Carbon Vantage" />
                <meta property="og:description" content="Discover how Carbon Vantage can help your business navigate and optimize CBAM compliance." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.carbonvantage.com/cbam-info" />
                <link rel="canonical" href="https://www.carbonvantage.com/cbam-info" />
            </div>
            <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
                <h1 className="text-2xl font-semibold mb-8 text-center">Understanding CBAM and Our Optimization Services</h1>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">What is CBAM?</h3>
                    <p className="text-gray-600 mb-4">
                        The Carbon Border Adjustment Mechanism (CBAM) is a climate measure that aims to prevent 'carbon leakage'.
                        It puts a carbon price on imports of certain goods from outside the European Union,
                        ensuring that ambitious climate action in Europe does not lead to 'carbon leakage'.
                    </p>
                    <p className="text-gray-600 mb-4">
                        CBAM initially applies to imports of cement, iron and steel, aluminium, fertilizers, electricity and hydrogen.
                        Importers of these goods need to purchase CBAM certificates to account for the difference between the carbon price paid in the country of production and the price of carbon allowances in the EU ETS.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Why is CBAM Important?</h3>
                    <p className="text-gray-600 mb-4">
                        CBAM is crucial for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li>Preventing carbon leakage</li>
                        <li>Encouraging cleaner production processes globally</li>
                        <li>Leveling the playing field for EU and non-EU businesses</li>
                        <li>Supporting the EU's climate objectives</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">How Carbon Vantage Can Help Optimize Your CBAM Compliance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BarChart2Icon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                                    Carbon Footprint Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                We provide detailed analysis of your products' carbon footprint, helping you understand and optimize your CBAM liability.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <ClipboardCheckIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                                    Compliance Strategy
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Our experts develop tailored strategies to ensure your business is fully compliant with CBAM regulations.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <TrendingUpIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                                    Process Optimization
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                We identify opportunities to reduce carbon emissions in your production processes, potentially lowering your CBAM costs.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <LeafIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                                    Sustainable Sourcing
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Our team helps you find and transition to low-carbon suppliers, reducing your overall carbon footprint and CBAM liability.
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Ready to Optimize Your CBAM Compliance?</h3>
                    <Link href="/contact">
                        <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Contact Us Today
                        </Button>
                    </Link>
                </section>
            </main>
        </>
    )
}