import { resetProductsAction } from "@/actions/resetProducts"
import { Button } from "./ui/button"

export function ProductsReset() {
    return <div className="text-center">
        <form action={resetProductsAction}>
            <Button type="submit">Reset the product list</Button>
        </form>
    </div>

}