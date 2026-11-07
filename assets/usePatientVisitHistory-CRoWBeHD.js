import{t as e}from"./useQuery-BZsnYCxD.js";import{n as t}from"./client-CEY8y854.js";function n(e){return e?.consultation_attachments?.[0]?.count??0}function r(n){return e({queryKey:[`clinic`,`patient-visit-history`,n],enabled:!!n,staleTime:3e4,queryFn:async()=>{let{data:e,error:r}=await t.from(`queue_entries`).select(`
          id, created_at, queue_sequence, clinic_status, visit_notes,
          consultations:consultations!consultations_queue_entry_id_fkey (
            id, doctor_id, diagnosis_text, case_note, dispense_note,
            diagnoses:diagnosis_id ( id, name ),
            doctors:doctor_id ( id, name ),
            consultation_items!left ( id, item_name, quantity, price, deleted_at ),
            consultation_attachments ( count )
          )
        `).eq(`patient_id`,n).neq(`visit_type`,`payment_only`).is(`deleted_at`,null).is(`consultations.consultation_items.deleted_at`,null).order(`created_at`,{ascending:!1}).limit(10);if(r)throw r;let i=e??[];for(let e of i){let t=Array.isArray(e.consultations)?e.consultations:e.consultations?[e.consultations]:[];for(let e of t)e?.consultation_items&&(e.consultation_items=e.consultation_items.filter(e=>!e.deleted_at))}return i}})}export{r as n,n as t};