"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useDemoContext } from "@/context/demo-context"
import { Button } from "@/components/ui/button"
import { Coffee, Plus, Check, Loader2, Package } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function BatchCreationStep() {
  const { batches, createBatch } = useDemoContext()
  const [isCreating, setIsCreating] = useState(false)
  const [batchData, setBatchData] = useState({
    producer: "Yirgacheffe Cooperative",
    origin: "Ethiopia",
    variety: "Heirloom",
    altitude: "1,800-2,200 masl",
    process: "Washed",
    roastProfile: "Medium",
    harvestDate: new Date().toISOString().split("T")[0],
    quantity: 1000,
    packagingInfo: "250g",
    pricePerUnit: 12.99,
  })

  const handleInputChange = (e:any) => {
    const { name, value } = e.target
    setBatchData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "pricePerUnit" ? Number.parseFloat(value) : value,
    }))
  }

  const handleSelectChange = (name:string, value:any) => {
    setBatchData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsCreating(true)
    await createBatch(batchData)
    setIsCreating(false)
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Step 1: Batch Creation</CardTitle>
            </div>
          </div>
          <CardDescription className="mt-2">
            The first step in the Coffee Tokenization workflow is batch creation. Coffee producers register their
            roasted coffee batches on the blockchain with detailed information about origin, variety, processing method,
            and packaging. This creates a permanent, immutable record that forms the foundation for tokenization and
            retail distribution.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Create a New Coffee Batch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="producer">Producer</Label>
                    <Input
                      id="producer"
                      name="producer"
                      value={batchData.producer}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="origin">Origin</Label>
                    <Select value={batchData.origin} onValueChange={(value) => handleSelectChange("origin", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select origin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                        <SelectItem value="Colombia">Colombia</SelectItem>
                        <SelectItem value="Kenya">Kenya</SelectItem>
                        <SelectItem value="Guatemala">Guatemala</SelectItem>
                        <SelectItem value="Brazil">Brazil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="variety">Variety</Label>
                    <Input
                      id="variety"
                      name="variety"
                      value={batchData.variety}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="altitude">Altitude</Label>
                    <Input
                      id="altitude"
                      name="altitude"
                      value={batchData.altitude}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="process">Process</Label>
                    <Select value={batchData.process} onValueChange={(value) => handleSelectChange("process", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select process" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Washed">Washed</SelectItem>
                        <SelectItem value="Natural">Natural</SelectItem>
                        <SelectItem value="Honey">Honey</SelectItem>
                        <SelectItem value="Anaerobic">Anaerobic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roastProfile">Roast Profile</Label>
                    <Select
                      value={batchData.roastProfile}
                      onValueChange={(value) => handleSelectChange("roastProfile", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select roast profile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Light">Light</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Medium-Dark">Medium-Dark</SelectItem>
                        <SelectItem value="Dark">Dark</SelectItem>
                        <SelectItem value="Espresso">Espresso</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="harvestDate">Harvest Date</Label>
                    <Input
                      id="harvestDate"
                      name="harvestDate"
                      type="date"
                      value={batchData.harvestDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Number of Bags</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      value={batchData.quantity}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-muted-foreground">Total number of retail coffee bags in this batch</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="packagingInfo">Bag Size</Label>
                    <Select
                      value={batchData.packagingInfo}
                      onValueChange={(value) => handleSelectChange("packagingInfo", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select bag size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="250g">250g</SelectItem>
                        <SelectItem value="500g">500g</SelectItem>
                        <SelectItem value="1kg">1kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pricePerUnit">Price per Bag ($)</Label>
                    <Input
                      id="pricePerUnit"
                      name="pricePerUnit"
                      type="number"
                      step="0.01"
                      value={batchData.pricePerUnit}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4" disabled={isCreating}>
                  {isCreating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating Batch...
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Batch
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Batches List Section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Created Batches</h3>
              {batches.length === 0 ? (
                <div className="border rounded-lg p-6 text-center bg-muted/50">
                  <Package className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-foreground/70">No batches created yet</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fill out the form to create your first coffee batch
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {batches.map((batch) => (
                    <div key={batch.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{batch.producer}</h4>
                        <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs border border-primary/20">
                          {batch.status === "created" && "Created"}
                          {batch.status === "verified" && (
                            <span className="flex items-center">
                              <Check className="h-3 w-3 mr-1" /> Verified
                            </span>
                          )}
                          {batch.status === "tokenized" && "Tokenized"}
                          {batch.status === "distributed" && "Distributed"}
                          {batch.status === "redeemed" && "Redeemed"}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Batch ID: <span className="text-foreground font-mono">{batch.id}</span>
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                        <div>
                          <span className="text-muted-foreground">Origin:</span>{" "}
                          <span className="text-foreground">{batch.origin}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Variety:</span>{" "}
                          <span className="text-foreground">{batch.variety}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Process:</span>{" "}
                          <span className="text-foreground">{batch.process}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Roast:</span>{" "}
                          <span className="text-foreground">{batch.roastProfile}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Bags:</span>{" "}
                          <span className="text-foreground">
                            {batch.quantity} × {batch.packagingInfo}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price:</span>{" "}
                          <span className="text-foreground">${batch.pricePerUnit}</span>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t text-xs text-muted-foreground">
                        Created on {new Date(batch.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
