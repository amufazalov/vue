<template>
    <div class="container">
        <!--$v - отвечает за все валидации validate -->
        <form class="pt-5" @submit.prevent="onSubmit">
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
                <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exists</div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input  type="password"
                        id="password"
                        class="form-control"
                        @blur="$v.password.$touch()"
                       v-model="password"
                       :class="{'is-invalid': $v.password.$error}"
                       >
                <div class="invalid-feedback" v-if="!$v.password.minLength">
                    Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
                </div>
            </div>

            <div class="form-group">
                <label for="confirm">Confirm Password</label>
                <input  type="password"
                        id="confirm"
                        class="form-control"
                        @blur="$v.confirmPassword.$touch()"
                        v-model="confirmPassword"
                        :class="{'is-invalid': $v.confirmPassword.$error}"
                >
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
                   Passwords should match
                </div>
            </div>

            <button
                    class="btn btn-success"
                    type="submit"
                    :disabled="$v.$invalid"
            >Submit</button>
        </form>

        <!--<pre>-->
            <!--{{ $v.password }}-->
        <!--</pre>-->
    </div>
</template>

<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            onSubmit(){
                console.log('Email', this.email)
                console.log('Password', this.password)
            }
        },
        validations: {
            email: {
                required: required,
                email: email,
                uniqEmail: function (newEmail) {
                    if(newEmail === '') return true;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const value = newEmail !== 'test@mail.ru'
                            resolve(value)
                        }, 1000)
                    })
                }
            },
            password: {
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs('password')
            }
        }
    }
</script>