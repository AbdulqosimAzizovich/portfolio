"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const bot_token = "6214735164:AAGghbDMKBlpCROc9LPaTgJsfKX9BtZeHWc";
  const chatId = "1147407714";

  function onSubmit(values: z.infer<typeof formSchema>) {
    const sendMessage = `Message from ${values.name}. ${values.message}. Contact: ${values.email}`;
    fetch(
      `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chatId}&text=${sendMessage}`
    )
      .then(() => {
        // Reset form after successful submission
        form.reset({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }

  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-400">
            Interested in collaborating or commissioning a project? Let's create
            something amazing together.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        className="min-h-[120px] text-black"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <line
              key={i}
              x1={i * 2}
              y1="0"
              x2={i * 2}
              y2="100"
              stroke="white"
              strokeWidth="0.1"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
