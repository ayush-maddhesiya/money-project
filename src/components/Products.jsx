import React from 'react'

function Products() {
    return (
        <div>
            <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1583752028088-91e3e9880b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        class="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-left">
                        <h1 class="text-lg font-semibold text-white">Commodity</h1>
                        <p class="mt-2 text-sm text-gray-300">
                        Dynamically changing global environment, government policies and commodity inventory plays a vital role. our dedicated research team tracks even micro changes happening in domestic and global market.
                        </p>
                        
                    </div>
                </div>
                <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="AirMax Pro"
                        class="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-left">
                        <h1 class="text-lg font-semibold text-white">Private Wealth Advisors</h1>
                        <p class="mt-2 text-sm text-gray-300">
                        Private Wealth Advisors partner with senior executives to address client's most complex wealth challenges. Clients benefit from our specialized expertise managing in particular, Stocks, Forex, commodity & stock holdings.
                        </p>
                        
                    </div>
                </div>
                <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1616261167032-b16d2df8333b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="AirMax Pro"
                        class="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-left">
                        <h1 class="text-lg font-semibold text-white">Forex</h1>
                        <p class="mt-2 text-sm text-gray-300">
                        We're a leading forex service provider in domestic market. Our expertise offers recommendation in all 4 currencies traded in Mcx-Sx i.e. USD-INR / EURO-NR / GBP-INR / YEN-INR.
                        </p>
                        
                    </div>
                </div>
                <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1651340981821-b519ad14da7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="AirMax Pro"
                        class="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-left">
                        <h1 class="text-lg font-semibold text-white">Equity & Derivative</h1>
                        <p class="mt-2 text-sm text-gray-300">
                        We understand your financial needs better than anybody else that's why we deliberately applied our focused and innovative approach while preparing our financial solutions. Our wide range of products fits in your requirement.
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
