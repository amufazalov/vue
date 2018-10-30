<template>
    <div class="container">
        <!--$v - отвечает за все валидации validate -->
        <form class="pt-5">
            <div class="form-group">
                <label for="email">Email</label>
                <input @blur="$v.email.$touch()"
                       v-model="email"
                       type="email"
                       class="form-control"
                       :class="{'is-invalid': $v.email.$error}"
                       id="email">
                <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
                <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
            </div>
        </form>

   <!--     <pre>
            {{ $v.email }}
        </pre>-->
    </div>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: ''
            }
        },
        validations: {
            email: {
                required: required,
                email: email
            }
        }
    }
</script>