'use client'
import React, { useState } from 'react'
import { Send, Info, Sparkles, ChevronDown, Check } from 'lucide-react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const FormConferma = ({ props }: { props: any }) => {
  const { categoryName, info } = props
  const [submitting, setSubmitting] = useState(false)

  const inputCls = 'w-full px-5 py-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400'
  const labelCls = 'block text-[12px] font-bold text-gray-500 mb-2 uppercase tracking-widest ml-1'
  const helpCls = 'block text-xs text-gray-400 mt-2 leading-relaxed ml-1 italic'


  return (
    <section className="mt-5 mb-25">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Prenotazione</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{categoryName}</h2>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8"

        >
          {info?.map((field: any, index: number) => {
            const isFull = field.width === 'full' || field.type === 'div' || field.type === 'select-multiple'
            const gridClass = isFull ? 'md:col-span-2' : 'md:col-span-1'
            if (field.type === 'div') {
              return (
                <div key={index}
                     className="md:col-span-2 p-6 rounded-3xl bg-blue-50 border border-blue-100 flex gap-4 my-2">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                  <div className="prose prose-blue prose-sm max-w-none text-blue-800">
                    <RichText data={field.content} />
                  </div>
                </div>
              )
            }

            if (field.type === 'select-multiple') {
              return (
                <div key={index} className="md:col-span-2">
                  <label className={labelCls}>{field.fieldName}{field.required ?? '*'} (Scegli più opzioni)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    {field.selectOptions?.map((opt: any, i: number) => (
                      <label key={i}
                             className="relative flex items-center p-4 rounded-2xl border-2 border-gray-100 bg-gray-50 cursor-pointer hover:bg-white hover:border-indigo-200 transition-all group">
                        <input
                          type="checkbox"
                          name={field.fieldName}
                          value={opt.value}
                          className="peer sr-only"
                          required={field.required}
                        />
                        <div
                          className="w-6 h-6 rounded-lg border-2 border-gray-300 bg-white peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all flex items-center justify-center">
                          <Check className="w-4 h-4 text-white scale-0 peer-checked:scale-100 transition-transform" />
                        </div>
                        <span className="ml-3 font-medium text-gray-600 peer-checked:text-indigo-900 transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {field.info && <span className={helpCls}>{field.info}</span>}
                </div>
              )
            }

            if (field.type === 'select') {
              return (
                <div key={index} className={gridClass}>
                  <label className={labelCls}>{field.fieldName}{field.required ? '*' : ''}</label>
                  <div className="relative">
                    <select name={field.fieldName} required={field.required}
                            className={`${inputCls} appearance-none cursor-pointer`}>
                      <option value="">Scegli...</option>
                      {field.selectOptions?.map((opt: any, i: number) => (
                        <option key={i} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {field.info && <span className={helpCls}>{field.info}</span>}
                </div>
              )
            }

            return (
              <div key={index} className={gridClass}>
                <label className={labelCls}>{field.fieldName}{field.required ? '*' : ''}</label>
                <input name={field.fieldName} type={field.type} placeholder={field.placeholder}
                       required={field.required}
                       className={inputCls} />
                {field.info && <span className={helpCls}>{field.info}</span>}
              </div>
            )
          })}

          <div className="md:col-span-2 mt-8 space-y-8">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-1">
                <input type="checkbox" required className="peer sr-only" />
                <div
                  className="w-6 h-6 rounded-lg border-2 border-gray-200 bg-white peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all" />
                <Check
                  className="absolute inset-0 w-6 h-6 text-white scale-0 peer-checked:scale-100 transition-transform p-1" />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors mt-2">Accetto i termini e confermo la correttezza dei dati.</span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-5 rounded-4xl bg-gray-900 text-white font-bold text-lg hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {submitting ?
                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" /> : <><Send
                  size={20} /><span>CONFERMA E INVIA</span></>}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}