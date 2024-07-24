// A package that fails client-side
// => an extra-security that prevents leaking server code client-side
// (eventhough it's not very probably)
import "server-only"

/**
 * This is a fake database that will store product
 * in a temporary file
 */

import path from "path";
import os from "os"
import fs from "fs/promises"
import { Preorder } from "@/lib/typings";
import { nanoid } from "nanoid";

function preordersPath() {
    return path.join(os.tmpdir(), "newline-preorders.json")
}

async function replacePreorders(preorders: Array<Preorder>) {
    const filepath = preordersPath()
    console.log(`Resetting ${filepath} with ${preorders.length} preorders`)
    await fs.writeFile(filepath, JSON.stringify(preorders, null, 2))
}

export async function addPreorder(preorder: Preorder) {
    const existingPreorders = await getPreorders()
    // add a unique id
    preorder.id = nanoid()
    const updatedPreorders = [preorder, ...existingPreorders]
    await replacePreorders(updatedPreorders)
    return preorder
}

async function seedPreorders(): Promise<Array<Preorder>> {
    const seeded = Array(4)
        .fill({ email: "test@test.test" })
        // add unique ids
        .map(p => ({ ...p, id: nanoid() }))
    await replacePreorders(seeded)
    return seeded
}

export const resetPreorders = seedPreorders

/**
 * Get products
 * Will automatically seed the list the first time it's called
 * @returns 
 */
export async function getPreorders(): Promise<Array<Preorder>> {
    const filepath = preordersPath()
    const data = (await fs.readFile(filepath, { flag: "a+" })).toString()
    console.log(`Getting preorders from file ${filepath}`)
    try {
        const preorders = JSON.parse(data) as Array<Preorder>
        return preorders
    } catch (err) {
        console.warn(`Couldn't parse file at ${filepath} as JSON. 
        If you run the application for the first time it's normal.`)
        const seeded = await seedPreorders()
        return seeded
    }
}

export async function countPreorders() {
    return (await getPreorders())?.length || 0
}